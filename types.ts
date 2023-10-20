import { AccountType, PaymentFeePayer, TokenConfig } from "./utils"
export { PaymentFeePayer, TokenConfig } from "./utils"

export type Access = {
    authority: string
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
    bountyVaults: string[]
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
}

export type SellerConfig = {
    paymentMint: string;
    productPrice: number;
}

export type Product = {
    authority: string
    marketplace: string
    productMint: string
    merkleTree: string
    sellerConfig: SellerConfig
}

export type Reward = {
    authority: string
    rewardVaults: string[]
}

export type ParsedAccountsData =
    | Marketplace
    | Product
    | Reward
    | Access

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
    type: InstructionType
    signer: string
    receiver: string
    marketplace: string
    request: string
    accessVault: string
}

export type AirdropAccessInfo = {
    type: InstructionType
    signer: string
    receiver: string
    marketplace: string
    accessMint: string
    accessVault: string
}

export type EditProductInfo = {
    type: InstructionType
    signer: string
    product: string
    paymentMint: string
    productPrice: number
}

export type EditMarketplaceInfo = {
    type: InstructionType
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
    type: InstructionType
    signer: string
    marketplace: string
    rewardMint: string
    bountyVault: string
}

export type InitMarketplaceInfo = {
    type: InstructionType
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
    type: InstructionType
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
    type: InstructionType
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
    type: InstructionType
    signer: string
    marketplace: string
    reward: string
    rewardMint: string
    rewardVault: string
}

export type InitRewardInfo = {
    type: InstructionType
    signer: string
    marketplace: string
    reward: string
    rewardMint: string
    rewardVault: string
}

export type RegisterBuyCnftInfo = {
    type: InstructionType
    signer: string
    seller: string
    product: string
    paymentMint: string
    buyerTransferVault: string
    sellerTransferVault: string
    units: number
}

export type RegisterBuyFungibleInfo = {
    type: InstructionType
    signer: string
    seller: string
    product: string
    paymentMint: string
    buyerTransferVault: string
    sellerTransferVault: string
    units: number
}

export type RegisterBuyInfo = {
    type: InstructionType
    signer: string
    seller: string
    product: string
    paymentMint: string
    buyerTransferVault: string
    sellerTransferVault: string
    units: number
}

export type RequestAccessInfo = {
    type: InstructionType
    signer: string
    marketplace: string
    request: string
}

export type UpdateTreeInfo = {
    type: InstructionType
    payer: string
    signer: string
    product: string
    merkleTree: string
}

export type WithdrawRewardInfo = {
    type: InstructionType
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
