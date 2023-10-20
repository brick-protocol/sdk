export * from './Access'
export * from './Marketplace'
export * from './Product'
export * from './Reward'

import * as solita from '../'

export enum AccountType {
    Marketplace = 'Marketplace',
    Product = 'Product',
    Reward = 'Reward',
    Access = 'Access',
}

export function getAccountType(data: Buffer): AccountType | undefined {
    const discriminator = Buffer.from(data.buffer, data.byteOffset, 8);
    return ACCOUNT_METHOD.get(discriminator.toString('ascii'))
}

const accountDiscriminators = [
    { discriminator: solita.marketplaceDiscriminator, type: AccountType.Marketplace },
    { discriminator: solita.productDiscriminator, type: AccountType.Product },
    { discriminator: solita.rewardDiscriminator, type: AccountType.Reward },
    { discriminator: solita.accessDiscriminator, type: AccountType.Access },
];

export const ACCOUNT_METHOD: Map<string, AccountType | undefined> = new Map(
    accountDiscriminators.map(({ discriminator, type }) => [
        Buffer.from(discriminator).toString('ascii'),
        type,
    ])
);
