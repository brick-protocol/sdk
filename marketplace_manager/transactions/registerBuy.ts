import { Connection, PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { NATIVE_MINT, TOKEN_PROGRAM_ID, getAssociatedTokenAddressSync } from "@solana/spl-token";
import { RegisterBuyInstructionAccounts, createRegisterBuyInstruction } from "../../utils/solita"
import { BRICK_PROGRAM_ID_PK } from "../../constants";
import { deriveBrickPda } from "../../utils/derivePda";

type RegisterBuyAccounts = {
    signer: PublicKey
    marketplace: PublicKey
    product: PublicKey
    seller: PublicKey
    marketplaceAuth: PublicKey
    paymentMint: PublicKey
}

type RegisterBuyParams = {
    rewardsActive: boolean
    amount: number
}

export async function createRegisterBuyTransaction(
    connection: Connection, 
    accounts: RegisterBuyAccounts, 
    params: RegisterBuyParams
): Promise<VersionedTransaction> {
    const sellerReward = deriveBrickPda("reward", [
        accounts.seller, accounts.marketplace
    ]);
    const sellerRewardVault = deriveBrickPda("reward_vault", [
        accounts.seller, accounts.marketplace, accounts.paymentMint
    ]);
    
    const buyerReward = deriveBrickPda("reward", [
        accounts.signer, accounts.marketplace
    ]);
    const buyerRewardVault = deriveBrickPda("reward_vault", [
        accounts.seller, accounts.marketplace, accounts.paymentMint
    ]);
    
    const bountyVault = deriveBrickPda("bounty_vault", [
        accounts.marketplace, accounts.paymentMint
    ]);
    
    const ixAccounts: RegisterBuyInstructionAccounts = {
        ...accounts,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        rent: SYSVAR_RENT_PUBKEY,
        buyerTransferVault: accounts.paymentMint !== NATIVE_MINT ? getAssociatedTokenAddressSync(accounts.paymentMint, accounts.signer, false, TOKEN_PROGRAM_ID) : null,
        sellerTransferVault: accounts.paymentMint !== NATIVE_MINT ? getAssociatedTokenAddressSync(accounts.paymentMint, accounts.seller, false, TOKEN_PROGRAM_ID) : null,
        marketplaceTransferVault: accounts.paymentMint !== NATIVE_MINT ? getAssociatedTokenAddressSync(accounts.paymentMint, accounts.marketplaceAuth, false, TOKEN_PROGRAM_ID) : null,
        bountyVault: params.rewardsActive ? bountyVault : null,
        sellerReward: params.rewardsActive ? sellerReward : null,
        sellerRewardVault: params.rewardsActive ? sellerRewardVault : null,
        buyerReward: params.rewardsActive ? buyerReward : null,
        buyerRewardVault: params.rewardsActive ? buyerRewardVault : null,
    };
    const ix = createRegisterBuyInstruction(ixAccounts, {amount: params.amount});
    let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash;
    const messageV0 = new TransactionMessage({
        payerKey: accounts.signer,
        recentBlockhash: blockhash,
        instructions: [ix],
    }).compileToV0Message();

    return new VersionedTransaction(messageV0);
}