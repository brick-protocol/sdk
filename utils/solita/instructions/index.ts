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
    const discriminator = Buffer.from(data.buffer, data.byteOffset, 8);
    return IX_METHOD.get(discriminator.toString('ascii'));
}

const instructionDiscriminators = [
    { discriminator: solita.acceptAccessInstructionDiscriminator, type: InstructionType.AcceptAccess },
    { discriminator: solita.airdropAccessInstructionDiscriminator, type: InstructionType.AirdropAccess },
    { discriminator: solita.editProductInstructionDiscriminator, type: InstructionType.EditProduct },
    { discriminator: solita.editMarketplaceInstructionDiscriminator, type: InstructionType.EditMarketplace },
    { discriminator: solita.initBountyInstructionDiscriminator, type: InstructionType.InitBounty },
    { discriminator: solita.initMarketplaceInstructionDiscriminator, type: InstructionType.InitMarketplace },
    { discriminator: solita.initProductTreeInstructionDiscriminator, type: InstructionType.InitProductTree },
    { discriminator: solita.initProductInstructionDiscriminator, type: InstructionType.InitProduct },
    { discriminator: solita.initRewardVaultInstructionDiscriminator, type: InstructionType.InitRewardVault },
    { discriminator: solita.initRewardInstructionDiscriminator, type: InstructionType.InitReward },
    { discriminator: solita.registerBuyCnftInstructionDiscriminator, type: InstructionType.RegisterBuyCnft },
    { discriminator: solita.registerBuyInstructionDiscriminator, type: InstructionType.RegisterBuy },
    { discriminator: solita.requestAccessInstructionDiscriminator, type: InstructionType.RequestAccess },
    { discriminator: solita.updateTreeInstructionDiscriminator, type: InstructionType.UpdateTree },
    { discriminator: solita.withdrawRewardInstructionDiscriminator, type: InstructionType.WithdrawReward },
];

export const IX_METHOD: Map<string, InstructionType | undefined> = new Map(
    instructionDiscriminators.map(({ discriminator, type }) => [
        Buffer.from(discriminator).toString('ascii'),
        type,
    ])
);

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
