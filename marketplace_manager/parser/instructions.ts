import { 
    IX_ACCOUNTS_LAYOUT, 
    IX_DATA_LAYOUT, 
} from '../../utils'
import { 
    InstructionType, 
    RegisterBuyInfo, 
    AcceptAccessInfo, 
    InitBountyInfo, 
    InitMarketplaceInfo, 
    InitProductInfo, 
    InitProductTreeInfo, 
    AirdropAccessInfo, 
    EditMarketplaceInfo, 
    EditProductInfo, 
    WithdrawRewardInfo,
    InitRewardVaultInfo,
    InitRewardInfo,
    RequestAccessInfo,
    UpdateTreeInfo
} from '../../types'

export const instructionParsers = {
    [InstructionType.RegisterBuy]: parseRegisterBuy,
    [InstructionType.RegisterBuyCnft]: parseRegisterBuy,
    [InstructionType.RegisterBuyFungible]: parseRegisterBuy,
    [InstructionType.AcceptAccess]: parseAcceptAccess,
    [InstructionType.AirdropAccess]: parseAirdropAccess,
    [InstructionType.EditProduct]: parseEditProduct,
    [InstructionType.EditMarketplace]: parseEditMarketplace,
    [InstructionType.InitBounty]: parseInitBounty,
    [InstructionType.InitMarketplace]: parseInitMarketplace,
    [InstructionType.InitProduct]: parseInitProduct,
    [InstructionType.InitProductTree]: parseInitProductTree,
    [InstructionType.InitReward]: parseInitReward,
    [InstructionType.InitRewardVault]: parseInitRewardVault,
    [InstructionType.UpdateTree]: parseUpdateTree,
    [InstructionType.RequestAccess]: parseRequestAccess,
    [InstructionType.WithdrawReward]: parseWithdrawReward,
};

function parseRegisterBuy(instructionData: Buffer, accountsKeys: string[]): RegisterBuyInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.RegisterBuy];
    const [context] = IX_DATA_LAYOUT[InstructionType.RegisterBuy].deserialize(instructionData);
    const { ...result } = context;
    
    return {
        type: InstructionType.RegisterBuy,
        signer: accountsKeys[accounts.indexOf('signer')],
        seller: accountsKeys[accounts.indexOf('seller')],
        product: accountsKeys[accounts.indexOf('product')],
        paymentMint: accountsKeys[accounts.indexOf('paymentMint')],
        buyerTransferVault: accountsKeys[accounts.indexOf('buyerTransferVault')],
        sellerTransferVault: accountsKeys[accounts.indexOf('sellerTransferVault')],
        units: result.params.amount,
    };
}

function parseAcceptAccess(accountsKeys: string[]): AcceptAccessInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.AcceptAccess];

    return {
        type: InstructionType.AcceptAccess,
        signer: accountsKeys[accounts.indexOf('signer')],
        receiver: accountsKeys[accounts.indexOf('receiver')],
        marketplace: accountsKeys[accounts.indexOf('marketplace')],
        request: accountsKeys[accounts.indexOf('request')],
        accessVault: accountsKeys[accounts.indexOf('accessVault')],
    };
}

function parseAirdropAccess(accountsKeys: string[]): AirdropAccessInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.AirdropAccess];

    return {
        type: InstructionType.AirdropAccess,
        signer: accountsKeys[accounts.indexOf('signer')],
        receiver: accountsKeys[accounts.indexOf('receiver')],
        marketplace: accountsKeys[accounts.indexOf('marketplace')],
        accessMint: accountsKeys[accounts.indexOf('accessMint')],
        accessVault: accountsKeys[accounts.indexOf('accessVault')],
    };
}

function parseEditProduct(instructionData: Buffer, accountsKeys: string[]): EditProductInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.EditProduct];
    const [context] = IX_DATA_LAYOUT[InstructionType.EditProduct].deserialize(instructionData);
    const { ...result } = context;

    return {
        type: InstructionType.EditProduct,
        signer: accountsKeys[accounts.indexOf('signer')],
        product: accountsKeys[accounts.indexOf('product')],
        paymentMint: accountsKeys[accounts.indexOf('paymentMint')],
        productPrice: result.params.productPrice,
    };
}

function parseEditMarketplace(instructionData: Buffer, accountsKeys: string[]): EditMarketplaceInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.EditMarketplace];
    const [context] = IX_DATA_LAYOUT[InstructionType.EditMarketplace].deserialize(instructionData);
    const { ...result } = context;

    return {
        type: InstructionType.EditMarketplace,
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
            feePayer: result.params.feePayer,
            accessMintBump: result.params.accessMintBump,
        },
    };
}

function parseInitBounty(accountsKeys: string[]): InitBountyInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.InitBounty];
    
    return {
        type: InstructionType.InitBounty,
        signer: accountsKeys[accounts.indexOf('signer')],
        marketplace: accountsKeys[accounts.indexOf('marketplace')],
        rewardMint: accountsKeys[accounts.indexOf('rewardMint')],
        bountyVault: accountsKeys[accounts.indexOf('bountyVault')],
    };
}

function parseInitMarketplace(instructionData: Buffer, accountsKeys: string[]): InitMarketplaceInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.InitMarketplace];
    const [context] = IX_DATA_LAYOUT[InstructionType.InitMarketplace].deserialize(instructionData);
    const { ...result } = context;

    return {
        type: InstructionType.InitMarketplace,
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
            feePayer: result.params.feePayer,
            accessMintBump: result.params.accessMintBump,
        },
    };
}

function parseInitProduct(instructionData: Buffer, accountsKeys: string[]): InitProductInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.InitProduct];
    const [context] = IX_DATA_LAYOUT[InstructionType.InitProduct].deserialize(instructionData);
    const { ...result } = context;

    return {
        type: InstructionType.InitProduct,
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
}

function parseInitProductTree(instructionData: Buffer, accountsKeys: string[]): InitProductTreeInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.InitProductTree];
    const [context] = IX_DATA_LAYOUT[InstructionType.InitProductTree].deserialize(instructionData);
    const { ...result } = context;

    return {
        type: InstructionType.InitProductTree,
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
}

function parseInitReward(accountsKeys: string[]): InitRewardInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.InitReward];

    return {
        type: InstructionType.InitReward,
        signer: accountsKeys[accounts.indexOf('signer')],
        marketplace: accountsKeys[accounts.indexOf('marketplace')],
        rewardMint: accountsKeys[accounts.indexOf('rewardMint')],
        rewardVault: accountsKeys[accounts.indexOf('rewardVault')],
        reward: accountsKeys[accounts.indexOf('reward')],
    };
}

function parseInitRewardVault(accountsKeys: string[]): InitRewardVaultInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.InitRewardVault];

    return {
        type: InstructionType.InitRewardVault,
        signer: accountsKeys[accounts.indexOf('signer')],
        marketplace: accountsKeys[accounts.indexOf('marketplace')],
        reward: accountsKeys[accounts.indexOf('reward')],
        rewardMint: accountsKeys[accounts.indexOf('rewardMint')],
        rewardVault: accountsKeys[accounts.indexOf('rewardVault')]
    };
}

function parseUpdateTree(accountsKeys: string[]): UpdateTreeInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.UpdateTree];

    return {
        type: InstructionType.UpdateTree,
        payer: accountsKeys[accounts.indexOf('payer')],
        signer: accountsKeys[accounts.indexOf('signer')],
        product: accountsKeys[accounts.indexOf('product')],
        merkleTree: accountsKeys[accounts.indexOf('merkleTree')],
    };
}

function parseRequestAccess(accountsKeys: string[]): RequestAccessInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.RequestAccess];

    return {
        type: InstructionType.RequestAccess,
        signer: accountsKeys[accounts.indexOf('signer')],
        marketplace: accountsKeys[accounts.indexOf('marketplace')],
        request: accountsKeys[accounts.indexOf('request')],
    };
}

function parseWithdrawReward(accountsKeys: string[]): WithdrawRewardInfo {
    const accounts = IX_ACCOUNTS_LAYOUT[InstructionType.WithdrawReward];

    return {
        type: InstructionType.WithdrawReward,
        signer: accountsKeys[accounts.indexOf('signer')],
        marketplace: accountsKeys[accounts.indexOf('marketplace')],
        reward: accountsKeys[accounts.indexOf('reward')],
        rewardMint: accountsKeys[accounts.indexOf('rewardMint')],
        receiverVault: accountsKeys[accounts.indexOf('receiverVault')],
        rewardVault: accountsKeys[accounts.indexOf('rewardVault')],
    };
}