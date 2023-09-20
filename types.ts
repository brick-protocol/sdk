import { MarketplaceBumps, PaymentFeePayer, ProductBumps, TokenConfig } from "./utils"

export type Access = {
    authority: string
    bump: number
}

export type PermissionConfig = {
    accessMint: string
    permissionless: boolean
}

export type FeesConfig = {
    discountMint: string
    fee: number
    feeReduction: number
    feePayer: PaymentFeePayer
}

export type RewardsConfig = {
    rewardMint: string
    sellerReward: number
    buyerReward: number
    rewardsEnabled: boolean
}

export type Marketplace = {
    authority: string
    tokenConfig: TokenConfig
    permissionConfig: PermissionConfig
    feesConfig: FeesConfig
    rewardsConfig: RewardsConfig
    bumps: MarketplaceBumps
}

export type SellerConfig = {
    paymentMint: string;
    productPrice: number;
}

export type Product = {
    authority: string
    firstId: number[]
    secondId: number[]
    marketplace: string
    productMint: string
    merkleTree: string
    sellerConfig: SellerConfig
    bumps: ProductBumps
}

export type Reward = {
    authority: string
    marketplace: string
    rewardVaults: string[]
    bump: number
}

export type Payment = {
    units: number
    bump: number
}

export type ParsedAccountsData =
    | Marketplace
    | Product
    | Reward
    | Access
    | Payment

export enum AccountType {
    Marketplace = 'Marketplace',
    Product = 'Product',
    Reward = 'Reward',
    Access = 'Access',
    Payment = 'Payment',
}

export type BrickAccountInfo = {
    address: string
    type: AccountType
    data: ParsedAccountsData
} 

export enum InstructionType {
    AcceptAccess = 'AcceptAccess',
    AirdropAccess = 'AirdropAccess',
    EditProduct = 'EditProduct',
    EditMarketplace = 'EditMarketplace',
    InitBounty = 'InitBounty',
    InitMarketplace = 'InitMarketplace',
    InitProductTree = 'InitProductTree',
    InitProduct = 'InitProduct',
    InitRewardVault = 'InitRewardVault',
    InitReward = 'InitReward',
    RegisterBuyCnft = 'RegisterBuyCnft',
    RegisterBuyFungible = 'RegisterBuyFungible',
    RegisterBuy = 'RegisterBuy',
    RequestAccess = 'RequestAccess',
    UpdateTree = 'UpdateTree',
    WithdrawReward = 'WithdrawReward',
}

export type AcceptAccessInfo = {
    type: InstructionType.AcceptAccess
    signer: string
    receiver: string
    marketplace: string
    request: string
    accessVault: string
}

export type AirdropAccessInfo = {
    type: InstructionType.AirdropAccess
    signer: string
    receiver: string
    marketplace: string
    accessMint: string
    accessVault: string
}

export type EditProductInfo = {
    type: InstructionType.EditProduct
    signer: string
    product: string
    paymentMint: string
    productPrice: number
}

export type EditMarketplaceInfo = {
    type: InstructionType.EditMarketplace
    signer: string
    marketplace: string
    accessMint: string
    rewardMint: string
    discountMint: string
    bountyVault: string
    params: {
        fee: number
        feeReduction: number
        sellerReward: number
        buyerReward: number
        transferable: boolean
        permissionless: boolean
        rewardsEnabled: boolean
        accessMintBump: number
        feePayer: PaymentFeePayer
    }
}

export type InitBountyInfo = {
    type: InstructionType.InitBounty
    signer: string
    marketplace: string
    rewardMint: string
    bountyVault: string
}

export type InitMarketplaceInfo = {
    type: InstructionType.InitMarketplace
    signer: string
    marketplace: string
    accessMint: string
    rewardMint: string
    discountMint: string
    bountyVault: string
    params: {
        fee: number
        feeReduction: number
        sellerReward: number
        buyerReward: number
        transferable: boolean
        permissionless: boolean
        rewardsEnabled: boolean
        accessMintBump: number
        feePayer: PaymentFeePayer
    }
}

export type InitProductInfo = {
    type: InstructionType.InitProduct
    signer: string
    marketplace: string
    product: string
    productMint: string
    paymentMint: string
    accessMint: string
    accessVault: string
    params: {
        id: number[]
        productPrice: number
        productMintBump: number
    }
}

export type InitProductTreeInfo = {
    type: InstructionType.InitProductTree
    signer: string
    marketplace: string
    product: string
    productMint: string
    paymentMint: string
    accessMint: string
    productMintVault: string
    accessVault: string
    masterEdition: string
    metadata: string
    merkleTree: string
    treeAuthority: string
    params: {
        id: number[]
        productPrice: number
        maxDepth: number
        maxBufferSize: number
        name: string
        metadataUrl: string
        feeBasisPoints: number
    }
}

export type InitRewardVaultInfo = {
    type: InstructionType.InitRewardVault
    signer: string
    marketplace: string
    reward: string
    rewardMint: string
    rewardVault: string
}

export type InitRewardInfo = {
    type: InstructionType.InitReward
    signer: string
    marketplace: string
    reward: string
    rewardMint: string
    rewardVault: string
}

export type RegisterBuyCnftInfo = {
    type: InstructionType.RegisterBuyCnft
    signer: string
    seller: string
    product: string
    paymentMint: string
    buyerTransferVault: string
    sellerTransferVault: string
    units: number
}

export type RegisterBuyFungibleInfo = {
    type: InstructionType.RegisterBuyFungible
    signer: string
    seller: string
    product: string
    paymentMint: string
    buyerTransferVault: string
    sellerTransferVault: string
    units: number
}

export type RegisterBuyInfo = {
    type: InstructionType.RegisterBuy
    signer: string
    seller: string
    product: string
    paymentMint: string
    buyerTransferVault: string
    sellerTransferVault: string
    units: number
}

export type RequestAccessInfo = {
    type: InstructionType.RequestAccess,
    signer: string
    marketplace: string
    request: string
}

export type UpdateTreeInfo = {
    type: InstructionType.UpdateTree,
    payer: string
    signer: string
    product: string
    merkleTree: string
}

export type WithdrawRewardInfo = {
    type: InstructionType.WithdrawReward,
    signer: string
    marketplace: string
    reward: string
    rewardMint: string
    receiverVault: string
    rewardVault: string
}

export type EventInfo =
    | AcceptAccessInfo
    | AirdropAccessInfo
    | EditProductInfo
    | EditMarketplaceInfo
    | InitBountyInfo
    | InitMarketplaceInfo
    | InitProductTreeInfo
    | InitProductInfo
    | InitRewardVaultInfo
    | InitRewardInfo
    | RegisterBuyCnftInfo
    | RegisterBuyFungibleInfo
    | RegisterBuyInfo
    | RequestAccessInfo
    | UpdateTreeInfo
    | WithdrawRewardInfo
