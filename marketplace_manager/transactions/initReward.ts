import { Connection, PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { InitRewardInstructionAccounts, createInitRewardInstruction } from "../../utils/solita"
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { deriveBrickPda } from "../../utils/derivePda";

type InitRewardAccounts = {
    signer: PublicKey
    rewardMint: PublicKey
}

export async function createInitRewardTransaction(
    connection: Connection, 
    accounts: InitRewardAccounts, 
): Promise<VersionedTransaction> {
    
    const marketplace = deriveBrickPda("marketplace", [accounts.signer]);
    const reward = deriveBrickPda("reward", [accounts.signer, marketplace]);
    const rewardVault = deriveBrickPda("reward_vault", [accounts.signer, marketplace, accounts.rewardMint]);

    const ixAccounts: InitRewardInstructionAccounts = {
        ...accounts,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        rent: SYSVAR_RENT_PUBKEY,
        marketplace,
        reward,
        rewardVault,
    };
    const ix = createInitRewardInstruction(ixAccounts);
    let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash;
    const messageV0 = new TransactionMessage({
        payerKey: accounts.signer,
        recentBlockhash: blockhash,
        instructions: [ix],
    }).compileToV0Message();
    
    return new VersionedTransaction(messageV0);
}