import { Connection, PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { InitRewardVaultInstructionAccounts, createInitRewardVaultInstruction } from "../../utils/solita"
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { BRICK_PROGRAM_ID_PK } from "../../constants";

type InitRewardVaultAccounts = {
    signer: PublicKey
    rewardMint: PublicKey
}

export async function createInitRewardVaultTransaction(
    connection: Connection, 
    accounts: InitRewardVaultAccounts, 
): Promise<VersionedTransaction> {
    const [marketplace] = PublicKey.findProgramAddressSync(
        [
          Buffer.from("marketplace", "utf-8"),
          accounts.signer.toBuffer()
        ],
        BRICK_PROGRAM_ID_PK
    );
    const [reward] = PublicKey.findProgramAddressSync(
        [
          Buffer.from("reward", "utf-8"), 
          accounts.signer.toBuffer(),
          marketplace.toBuffer()
        ],
        BRICK_PROGRAM_ID_PK
    );
    const [rewardVault] = PublicKey.findProgramAddressSync(
        [
          Buffer.from("reward_vault", "utf-8"), 
          accounts.signer.toBuffer(),
          marketplace.toBuffer(),
          accounts.rewardMint.toBuffer(),
        ],
        BRICK_PROGRAM_ID_PK
    );
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