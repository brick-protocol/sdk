/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type InitProductTreeParams = {
  id: number[] /* size: 16 */
  productPrice: beet.bignum
  maxDepth: number
  maxBufferSize: number
  name: string
  metadataUrl: string
  feeBasisPoints: number
}

/**
 * @category userTypes
 * @category generated
 */
export const initProductTreeParamsBeet =
  new beet.FixableBeetArgsStruct<InitProductTreeParams>(
    [
      ['id', beet.uniformFixedSizeArray(beet.u8, 16)],
      ['productPrice', beet.u64],
      ['maxDepth', beet.u32],
      ['maxBufferSize', beet.u32],
      ['name', beet.utf8String],
      ['metadataUrl', beet.utf8String],
      ['feeBasisPoints', beet.u16],
    ],
    'InitProductTreeParams'
  )
