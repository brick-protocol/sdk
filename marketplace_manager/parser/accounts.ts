import { Access, Marketplace, Product, Reward } from "../../types";
import { ACCOUNTS_DATA_LAYOUT, AccountType } from "../../utils";

export const accountParsers = {
    [AccountType.Marketplace]: parseMarketplace,
    [AccountType.Product]: parseProduct,
    [AccountType.Reward]: parseReward,
    [AccountType.Access]: parseAccess,
};

function parseMarketplace(accountData: Buffer): Marketplace {
    return ACCOUNTS_DATA_LAYOUT[AccountType.Marketplace].deserialize(accountData)[0]
}

function parseProduct(accountData: Buffer): Product {
    return ACCOUNTS_DATA_LAYOUT[AccountType.Product].deserialize(accountData)[0]
}

function parseReward(accountData: Buffer): Reward {
    return ACCOUNTS_DATA_LAYOUT[AccountType.Reward].deserialize(accountData)[0]
}

function parseAccess(accountData: Buffer): Access {
    return ACCOUNTS_DATA_LAYOUT[AccountType.Access].deserialize(accountData)[0]
}