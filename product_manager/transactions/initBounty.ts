import { Connection, PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { InitBountyInstructionAccounts, createInitBountyInstruction } from "../../utils/solita"
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { deriveBrickPda } from "../../utils/derivePda";

export async function createInitBountyTransaction(
    connection: Connection, 
    signer: PublicKey,
    rewardMint: PublicKey
): Promise<VersionedTransaction> {
    const marketplace = deriveBrickPda("marketplace", [signer]);
    const bountyVault = deriveBrickPda("marketplace", [marketplace.toString(), rewardMint]);

    const ixAccounts: InitBountyInstructionAccounts = {
        signer,
        rewardMint,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        rent: SYSVAR_RENT_PUBKEY,
        marketplace,
        bountyVault,
    };
    const ix = createInitBountyInstruction(ixAccounts);
    let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash;
    const messageV0 = new TransactionMessage({
        payerKey: signer,
        recentBlockhash: blockhash,
        instructions: [ix],
    }).compileToV0Message();
    
    return new VersionedTransaction(messageV0);
}