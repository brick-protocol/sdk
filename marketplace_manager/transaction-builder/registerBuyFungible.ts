import {
  Connection,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js'
import {
  RegisterBuyFungibleInstructionAccounts,
  createRegisterBuyFungibleInstruction,
} from '../utils/instructions/registerBuyFungible'

export async function createRegisterBuyFungibleTransaction(
  connection: Connection,
  accounts: RegisterBuyFungibleInstructionAccounts,
  amount: number,
): Promise<VersionedTransaction> {
  const ix = createRegisterBuyFungibleInstruction(accounts, { amount })
  let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash
  const messageV0 = new TransactionMessage({
    payerKey: accounts.signer,
    recentBlockhash: blockhash,
    instructions: [ix],
  }).compileToV0Message()

  return new VersionedTransaction(messageV0)
}
