export * from './acceptAccess.js'
export * from './airdropAccess.js'
export * from './editMarketplace.js'
export * from './editProduct.js'
export * from './initBounty.js'
export * from './initMarketplace.js'
export * from './initProduct.js'
export * from './initProductTree.js'
export * from './initReward.js'
export * from './initRewardVault.js'
export * from './registerBuy.js'
export * from './registerBuyCnft.js'
export * from './registerBuyFungible.js'
export * from './requestAccess.js'
export * from './updateTree.js'
export * from './withdrawReward.js'

import * as solita from '../'
import { InstructionType } from '../../../types'

export function getInstructionType(data: Buffer): InstructionType | undefined {
    const discriminator = data.slice(0, 8)
    return IX_METHOD_CODE.get(discriminator.toString('ascii'))
}

export const IX_METHOD_CODE: Map<string, InstructionType | undefined> = new Map<
    string,
    InstructionType | undefined
>([
    [
        Buffer.from(solita.acceptAccessInstructionDiscriminator).toString('ascii'),
        InstructionType.AcceptAccess,
    ],
    [
        Buffer.from(solita.airdropAccessInstructionDiscriminator).toString('ascii'),
        InstructionType.AirdropAccess,
    ],
    [
        Buffer.from(solita.editProductInstructionDiscriminator).toString('ascii'),
        InstructionType.EditProduct,
    ],
    [
        Buffer.from(solita.editMarketplaceInstructionDiscriminator).toString(
        'ascii',
        ),
        InstructionType.EditMarketplace,
    ],
    [
        Buffer.from(solita.initBountyInstructionDiscriminator).toString('ascii'),
        InstructionType.InitBounty,
    ],
    [
        Buffer.from(solita.initMarketplaceInstructionDiscriminator).toString(
        'ascii',
        ),
        InstructionType.InitMarketplace,
    ],
    [
        Buffer.from(solita.initProductTreeInstructionDiscriminator).toString(
        'ascii',
        ),
        InstructionType.InitProductTree,
    ],
    [
        Buffer.from(solita.initProductInstructionDiscriminator).toString('ascii'),
        InstructionType.InitProduct,
    ],
    [
        Buffer.from(solita.initRewardVaultInstructionDiscriminator).toString(
        'ascii',
        ),
        InstructionType.InitRewardVault,
    ],
    [
        Buffer.from(solita.initRewardInstructionDiscriminator).toString('ascii'),
        InstructionType.InitReward,
    ],
    [
        Buffer.from(solita.registerBuyCnftInstructionDiscriminator).toString(
        'ascii',
        ),
        InstructionType.RegisterBuyCnft,
    ],
    [
        Buffer.from(solita.registerBuyInstructionDiscriminator).toString('ascii'),
        InstructionType.RegisterBuy,
    ],
    [
        Buffer.from(solita.requestAccessInstructionDiscriminator).toString('ascii'),
        InstructionType.RequestAccess,
    ],
    [
        Buffer.from(solita.updateTreeInstructionDiscriminator).toString('ascii'),
        InstructionType.UpdateTree,
    ],
    [
        Buffer.from(solita.withdrawRewardInstructionDiscriminator).toString(
        'ascii',
        ),
        InstructionType.WithdrawReward,
    ],
])

export const IX_DATA_LAYOUT: Partial<Record<InstructionType, any>> = {
    [InstructionType.AcceptAccess]: solita.acceptAccessStruct,
    [InstructionType.AirdropAccess]: solita.airdropAccessStruct,
    [InstructionType.EditProduct]: solita.editProductStruct,
    [InstructionType.EditMarketplace]: solita.editMarketplaceStruct,
    [InstructionType.InitBounty]: solita.initBountyStruct,
    [InstructionType.InitMarketplace]: solita.initMarketplaceStruct,
    [InstructionType.InitProductTree]: solita.initProductTreeStruct,
    [InstructionType.InitProduct]: solita.initProductStruct,
    [InstructionType.InitRewardVault]: solita.initRewardVaultStruct,
    [InstructionType.InitReward]: solita.initRewardStruct,
    [InstructionType.RegisterBuyCnft]: solita.registerBuyCnftStruct,
    [InstructionType.RegisterBuy]: solita.registerBuyStruct,
    [InstructionType.RequestAccess]: solita.requestAccessStruct,
    [InstructionType.UpdateTree]: solita.updateTreeStruct,
    [InstructionType.WithdrawReward]: solita.withdrawRewardStruct,
}

export const IX_ACCOUNTS_LAYOUT: Partial<Record<InstructionType, any>> = {
    [InstructionType.AcceptAccess]: solita.AcceptAccessAccounts,
    [InstructionType.AirdropAccess]: solita.AirdropAccessAccounts,
    [InstructionType.EditProduct]: solita.EditProductAccounts,
    [InstructionType.EditMarketplace]: solita.EditMarketplaceAccounts,
    [InstructionType.InitBounty]: solita.InitBountyAccounts,
    [InstructionType.InitMarketplace]: solita.InitMarketplaceAccounts,
    [InstructionType.InitProductTree]: solita.InitProductTreeAccounts,
    [InstructionType.InitProduct]: solita.InitProductAccounts,
    [InstructionType.InitRewardVault]: solita.InitRewardVaultAccounts,
    [InstructionType.InitReward]: solita.InitRewardAccounts,
    [InstructionType.RegisterBuyCnft]: solita.RegisterBuyCnftAccounts,
    [InstructionType.RegisterBuy]: solita.RegisterBuyAccounts,
    [InstructionType.RequestAccess]: solita.RequestAccessAccounts,
    [InstructionType.UpdateTree]: solita.UpdateTreeAccounts,
    [InstructionType.WithdrawReward]: solita.WithdrawRewardAccounts,
}
