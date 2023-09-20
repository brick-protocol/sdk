export * from './accounts/index.js'
export * from './instructions/index.js'
export * from './types/index.js'

export const AcceptAccessAccounts = [
  'signer',
  'receiver',
  'marketplace',
  'request',
  'accessMint',
  'accessVault',
  'rent',
  'systemProgram',
  'tokenProgram',
  'associatedTokenProgram',
]

export const AirdropAccessAccounts = [
  'signer',
  'receiver',
  'marketplace',
  'accessMint',
  'accessVault',
  'rent',
  'systemProgram',
  'tokenProgram',
  'associatedTokenProgram',
]

export const EditProductAccounts = [
  'signer',
  'product',
  'marketplace',
  'paymentMint',
]

export const EditMarketplaceAccounts = [
  'signer',
  'marketplace',
  'rewardMint',
  'discountMint',
]

export const InitBountyAccounts = [
  'signer',
  'marketplace',
  'rewardMint',
  'bountyVault',
  'rent',
  'systemProgram',
  'tokenProgram',
  'associatedTokenProgram',
]

export const InitMarketplaceAccounts = [
  'signer',
  'marketplace',
  'accessMint',
  'rewardMint',
  'discountMint',
  'bountyVault',
  'rent',
  'systemProgram',
  'tokenProgram2022',
  'tokenProgram',
]

export const InitProductTreeAccounts = [
  'signer',
  'marketplace',
  'product',
  'productMint',
  'paymentMint',
  'accessMint',
  'productMintVault',
  'accessVault',
  'masterEdition',
  'metadata',
  'merkleTree',
  'treeAuthority',
  'rent',
  'tokenMetadataProgram',
  'logWrapper',
  'systemProgram',
  'bubblegumProgram',
  'compressionProgram',
  'tokenProgram',
  'associatedTokenProgram',
]

export const InitProductAccounts = [
  'signer',
  'marketplace',
  'product',
  'productMint',
  'paymentMint',
  'accessMint',
  'accessVault',
  'rent',
  'systemProgram',
  'tokenProgram',
]

export const InitRewardVaultAccounts = [
  'systemProgram',
  'tokenProgram',
  'associatedTokenProgram',
  'rent',
  'signer',
  'marketplace',
  'reward',
  'rewardMint',
  'rewardVault',
]

export const InitRewardAccounts = [
  'signer',
  'marketplace',
  'reward',
  'rewardMint',
  'rewardVault',
  'rent',
  'systemProgram',
  'tokenProgram',
]

export const RegisterBuyCnftAccounts = [
  'signer',
  'seller',
  'marketplaceAuth',
  'marketplace',
  'product',
  'paymentMint',
  'productMint',
  'buyerTransferVault',
  'sellerTransferVault',
  'marketplaceTransferVault',
  'bountyVault',
  'sellerReward',
  'sellerRewardVault',
  'buyerReward',
  'buyerRewardVault',
  'metadata',
  'masterEdition',
  'treeAuthority',
  'bubblegumSigner',
  'merkleTree',
  'systemProgram',
  'tokenProgram',
  'rent',
  'logWrapper',
  'bubblegumProgram',
  'compressionProgram',
  'tokenMetadataProgram',
]

export const RegisterBuyFungibleAccounts = [
  'signer',
  'seller',
  'marketplaceAuth',
  'marketplace',
  'product',
  'productMint',
  'paymentMint',
  'buyerTokenVault',
  'buyerTransferVault',
  'sellerTransferVault',
  'marketplaceTransferVault',
  'bountyVault',
  'sellerReward',
  'sellerRewardVault',
  'buyerReward',
  'buyerRewardVault',
  'systemProgram',
  'tokenProgram',
]

export const RegisterBuyAccounts = [
  'signer',
  'seller',
  'marketplaceAuth',
  'marketplace',
  'product',
  'paymentMint',
  'buyerTransferVault',
  'sellerTransferVault',
  'marketplaceTransferVault',
  'bountyVault',
  'sellerReward',
  'sellerRewardVault',
  'buyerReward',
  'buyerRewardVault',
  'systemProgram',
  'tokenProgram',
  'rent',
]

export const RequestAccessAccounts = [
  'signer',
  'marketplace',
  'request',
  'rent',
  'systemProgram',
]

export const UpdateTreeAccounts = [
  'payer',
  'signer',
  'marketplace',
  'product',
  'treeAuthority',
  'merkleTree',
  'logWrapper',
  'systemProgram',
  'bubblegumProgram',
  'compressionProgram',
]

export const WithdrawRewardAccounts = [
  'signer',
  'marketplace',
  'reward',
  'rewardMint',
  'receiverVault',
  'rewardVault',
  'tokenProgram',
]