/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category EditProduct
 * @category generated
 */
export type EditProductInstructionArgs = {
  productPrice: beet.bignum
}
/**
 * @category Instructions
 * @category EditProduct
 * @category generated
 */
export const editProductStruct = new beet.BeetArgsStruct<
  EditProductInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['productPrice', beet.u64],
  ],
  'EditProductInstructionArgs',
)
/**
 * Accounts required by the _editProduct_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] product
 * @property [_writable_] marketplace
 * @property [] paymentMint
 * @category Instructions
 * @category EditProduct
 * @category generated
 */
export type EditProductInstructionAccounts = {
  signer: web3.PublicKey
  product: web3.PublicKey
  marketplace: web3.PublicKey
  paymentMint: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const editProductInstructionDiscriminator = [
  23, 24, 155, 17, 230, 236, 1, 188,
]

/**
 * Creates a _EditProduct_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category EditProduct
 * @category generated
 */
export function createEditProductInstruction(
  accounts: EditProductInstructionAccounts,
  args: EditProductInstructionArgs,
  programId = new web3.PublicKey('PROGRAM PUBKEY'),
) {
  const [data] = editProductStruct.serialize({
    instructionDiscriminator: editProductInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.signer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.product,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.marketplace,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.paymentMint,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
