import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, getAssociatedTokenAddressSync } from "@solana/spl-token";
import { Connection, PublicKey, TransactionInstruction, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { createWithdrawRewardInstruction } from "../../utils/solita"
import { createAssociatedTokenAccountInstruction } from "@solana/spl-token";
import { deriveBrickPda } from "../../utils/derivePda";

type RegisterBuyFungibleAccounts = {
    signer: PublicKey
    marketplace: PublicKey
    rewardMint: PublicKey
}

export async function createWithdrawRewardTransaction(
    connection: Connection, 
    accounts: RegisterBuyFungibleAccounts, 
): Promise<VersionedTransaction> {
    const reward = deriveBrickPda("reward", [accounts.signer, accounts.marketplace]);
    const instructions: TransactionInstruction[] = [];

    const receiverVault = getAssociatedTokenAddressSync(accounts.rewardMint, accounts.signer, false, TOKEN_PROGRAM_ID);
    const receiverVaultExists = await connection.getAccountInfo(receiverVault);
    if (!receiverVaultExists) {
        instructions.push(
            createAssociatedTokenAccountInstruction(
                accounts.signer,
                receiverVault,
                accounts.signer,
                accounts.rewardMint,
                ASSOCIATED_TOKEN_PROGRAM_ID,
                TOKEN_PROGRAM_ID,
            )
        );
    }

    instructions.push(
        createWithdrawRewardInstruction({
            ...accounts,
            tokenProgram: TOKEN_PROGRAM_ID,
            signer: accounts.signer,
            marketplace: accounts.marketplace,
            reward,
            rewardMint: accounts.rewardMint,
            receiverVault,
            rewardVault: getAssociatedTokenAddressSync(accounts.rewardMint, reward, true, TOKEN_PROGRAM_ID),
        })
    );

    let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash;
    const messageV0 = new TransactionMessage({
        payerKey: accounts.signer,
        recentBlockhash: blockhash,
        instructions,
    }).compileToV0Message();

    return new VersionedTransaction(messageV0);
}