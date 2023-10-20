import { Connection, PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { InitRewardVaultInstructionAccounts, createInitRewardVaultInstruction } from "../../utils/solita"
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { BRICK_PROGRAM_ID_PK } from "../../constants";
import { deriveBrickPda } from "../../utils/derivePda";

type InitRewardVaultAccounts = {
    signer: PublicKey
    rewardMint: PublicKey
}

export async function createInitRewardVaultTransaction(
    connection: Connection, 
    accounts: InitRewardVaultAccounts, 
): Promise<VersionedTransaction> {
    const marketplace = deriveBrickPda("marketplace", [accounts.signer]);
    const reward = deriveBrickPda("reward", [accounts.signer, marketplace]);
    const rewardVault = deriveBrickPda("reward_vault", [accounts.signer, marketplace, accounts.rewardMint]);
    
    const ixAccounts: InitRewardVaultInstructionAccounts = {
        ...accounts,
        systemProgram: SystemProgram.programId,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        tokenProgram: TOKEN_PROGRAM_ID,
        rent: SYSVAR_RENT_PUBKEY,
        marketplace,
        reward,
        rewardVault,
    };
    const ix = createInitRewardVaultInstruction(ixAccounts);
    let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash;
    const messageV0 = new TransactionMessage({
        payerKey: accounts.signer,
        recentBlockhash: blockhash,
        instructions: [ix],
    }).compileToV0Message();
    
    return new VersionedTransaction(messageV0);
}