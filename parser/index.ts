import { EventInfo, InstructionType } from '../types'
import { BrickLayout, PaymentFeePayer } from '../utils'

export function getEventInfo(
    instructionData: Buffer, 
    accountsKeys: string[],
): EventInfo | null {
    const type = BrickLayout.getInstructionType(instructionData);
    if (!type) return null
    
    const accounts: string[] = BrickLayout.accountLayoutMap[type];
    const [context] = BrickLayout.dataLayoutMap[type].deserialize(instructionData);
    const { ...result } = context;

    switch (type) {
        case InstructionType.RegisterBuy && InstructionType.RegisterBuyCnft && InstructionType.RegisterBuyFungible:
            return {
                type,
                signer: accountsKeys[accounts.indexOf('signer')],
                seller: accountsKeys[accounts.indexOf('seller')],
                product: accountsKeys[accounts.indexOf('product')],
                paymentMint: accountsKeys[accounts.indexOf('paymentMint')],
                buyerTransferVault: accountsKeys[accounts.indexOf('buyerTransferVault')],
                sellerTransferVault: accountsKeys[accounts.indexOf('sellerTransferVault')],
                units: result.params.amount,
            };
        case InstructionType.AcceptAccess:
            return {
                type,
                signer: accountsKeys[accounts.indexOf('signer')],
                receiver: accountsKeys[accounts.indexOf('receiver')],
                marketplace: accountsKeys[accounts.indexOf('marketplace')],
                request: accountsKeys[accounts.indexOf('request')],
                accessVault: accountsKeys[accounts.indexOf('accessVault')],
            };

        case InstructionType.AirdropAccess:
            return {
                type,
                signer: accountsKeys[accounts.indexOf('signer')],
                receiver: accountsKeys[accounts.indexOf('receiver')],
                marketplace: accountsKeys[accounts.indexOf('marketplace')],
                accessMint: accountsKeys[accounts.indexOf('accessMint')],
                accessVault: accountsKeys[accounts.indexOf('accessVault')],
            };

        case InstructionType.EditProduct:
            return {
                type,
                signer: accountsKeys[accounts.indexOf('signer')],
                product: accountsKeys[accounts.indexOf('product')],
                paymentMint: accountsKeys[accounts.indexOf('paymentMint')],
                productPrice: result.params.productPrice,
            };

        case InstructionType.EditMarketplace:
            return {
                type,
                signer: accountsKeys[accounts.indexOf('signer')],
                marketplace: accountsKeys[accounts.indexOf('marketplace')],
                accessMint: accountsKeys[accounts.indexOf('accessMint')],
                rewardMint: accountsKeys[accounts.indexOf('rewardMint')],
                discountMint: accountsKeys[accounts.indexOf('discountMint')],
                bountyVault: accountsKeys[accounts.indexOf('bountyVault')],
                params: {
                    fee: result.params.fee,
                    feeReduction: result.params.feeReduction,
                    sellerReward: result.params.sellerReward,
                    buyerReward: result.params.buyerReward,
                    transferable: result.params.transferable,
                    permissionless: result.params.permissionless,
                    rewardsEnabled: result.params.rewardsEnabled,
                    feePayer: result.params.feePayer as PaymentFeePayer,
                    accessMintBump: result.params.accessMintBump
                },
            };

        case InstructionType.InitBounty:
            return {
                type,
                signer: accountsKeys[accounts.indexOf('signer')],
                marketplace: accountsKeys[accounts.indexOf('marketplace')],
                rewardMint: accountsKeys[accounts.indexOf('rewardMint')],
                bountyVault: accountsKeys[accounts.indexOf('bountyVault')],
            };

        case InstructionType.InitMarketplace:
            return {
                type,
                signer: accountsKeys[accounts.indexOf('signer')],
                marketplace: accountsKeys[accounts.indexOf('marketplace')],
                accessMint: accountsKeys[accounts.indexOf('accessMint')],
                rewardMint: accountsKeys[accounts.indexOf('rewardMint')],
                discountMint: accountsKeys[accounts.indexOf('discountMint')],
                bountyVault: accountsKeys[accounts.indexOf('bountyVault')],
                params: {
                    fee: result.params.fee,
                    feeReduction: result.params.feeReduction,
                    sellerReward: result.params.sellerReward,
                    buyerReward: result.params.buyerReward,
                    transferable: result.params.transferable,
                    permissionless: result.params.permissionless,
                    rewardsEnabled: result.params.rewardsEnabled,
                    feePayer: result.params.feePayer as PaymentFeePayer,
                    accessMintBump: result.params.accessMintBump
                },
            };

        case InstructionType.InitProduct:
            return {
                type,
                signer: accountsKeys[accounts.indexOf('signer')],
                marketplace: accountsKeys[accounts.indexOf('marketplace')],
                product: accountsKeys[accounts.indexOf('product')],
                productMint: accountsKeys[accounts.indexOf('productMint')],
                paymentMint: accountsKeys[accounts.indexOf('paymentMint')],
                accessMint: accountsKeys[accounts.indexOf('accessMint')],
                accessVault: accountsKeys[accounts.indexOf('accessVault')],
                params: {
                    id: result.params.id,
                    productPrice: result.params.productPrice,
                    productMintBump: result.params.productMintBump,
                },
            };

        case InstructionType.InitProductTree:
            return {
                type,
                signer: accountsKeys[accounts.indexOf('signer')],
                marketplace: accountsKeys[accounts.indexOf('marketplace')],
                product: accountsKeys[accounts.indexOf('product')],
                productMint: accountsKeys[accounts.indexOf('productMint')],
                paymentMint: accountsKeys[accounts.indexOf('paymentMint')],
                accessMint: accountsKeys[accounts.indexOf('accessMint')],
                productMintVault: accountsKeys[accounts.indexOf('productMintVault')],
                accessVault: accountsKeys[accounts.indexOf('accessVault')],
                masterEdition: accountsKeys[accounts.indexOf('masterEdition')],
                metadata: accountsKeys[accounts.indexOf('metadata')],
                merkleTree: accountsKeys[accounts.indexOf('merkleTree')],
                treeAuthority: accountsKeys[accounts.indexOf('treeAuthority')],
                params: {
                    id: result.params.id,
                    productPrice: result.params.productPrice,
                    maxDepth: result.params.maxDepth,
                    maxBufferSize: result.params.maxBufferSize,
                    name: result.params.name,
                    metadataUrl: result.params.metadataUrl,
                    feeBasisPoints: result.params.feeBasisPoints,
                },
            };

        case InstructionType.InitReward:
            return {
                type: InstructionType.InitReward,
                signer: accountsKeys[accounts.indexOf('signer')],
                marketplace: accountsKeys[accounts.indexOf('marketplace')],
                reward: accountsKeys[accounts.indexOf('reward')],
                rewardMint: accountsKeys[accounts.indexOf('rewardMint')],
                rewardVault: accountsKeys[accounts.indexOf('rewardVault')],
            };

        case InstructionType.InitRewardVault:
            return {
                type: InstructionType.InitRewardVault,
                signer: accountsKeys[accounts.indexOf('signer')],
                marketplace: accountsKeys[accounts.indexOf('marketplace')],
                reward: accountsKeys[accounts.indexOf('reward')],
                rewardMint: accountsKeys[accounts.indexOf('rewardMint')],
                rewardVault: accountsKeys[accounts.indexOf('rewardVault')],
            };

        case InstructionType.UpdateTree:
            return {
                type,
                payer: accountsKeys[accounts.indexOf('payer')],
                signer: accountsKeys[accounts.indexOf('signer')],
                product: accountsKeys[accounts.indexOf('product')],
                merkleTree: accountsKeys[accounts.indexOf('merkleTree')],
            };

        case InstructionType.RequestAccess:
            return {
                type,
                signer: accountsKeys[accounts.indexOf('signer')],
                marketplace: accountsKeys[accounts.indexOf('marketplace')],
                request: accountsKeys[accounts.indexOf('request')],
            };

        case InstructionType.WithdrawReward:
            return {
                type,
                signer: accountsKeys[accounts.indexOf('signer')],
                marketplace: accountsKeys[accounts.indexOf('marketplace')],
                reward: accountsKeys[accounts.indexOf('reward')],
                rewardMint: accountsKeys[accounts.indexOf('rewardMint')],
                receiverVault: accountsKeys[accounts.indexOf('receiverVault')],
                rewardVault: accountsKeys[accounts.indexOf('rewardVault')],
            };

        default:
            return null;
    }
}