import { InstructionType } from "../../types";
import { createAcceptAccessTransaction } from "./acceptAccess";
import { createAirdropAccessTransaction } from "./airdropAccess";
import { createEditMarketplaceTransaction } from "./editMarketplace";
import { createEditProductTransaction } from "./editProduct";
import { createInitBountyTransaction } from "./initBounty";
import { createInitMarketplaceTransaction } from "./initMarketplace";
import { createInitProductTransaction } from "./initProduct";
import { createInitProductTreeTransaction } from "./initProductTree";
import { createInitRewardTransaction } from "./initReward";
import { createInitRewardVaultTransaction } from "./initRewardVault";
import { createRegisterBuyTransaction } from "./registerBuy";
import { createRegisterBuyCnftTransaction } from "./registerBuyCnft";
import { createRegisterBuyFungibleTransaction } from "./registerBuyFungible";
import { createRequestAccessTransaction } from "./requestAccess";
import { createWithdrawRewardTransaction } from "./withdrawReward";

export const transactions = {
    [InstructionType.AcceptAccess]: createAcceptAccessTransaction,
    [InstructionType.AirdropAccess]: createAirdropAccessTransaction,
    [InstructionType.EditMarketplace]: createEditMarketplaceTransaction,
    [InstructionType.EditProduct]: createEditProductTransaction,
    [InstructionType.InitBounty]: createInitBountyTransaction,
    [InstructionType.InitMarketplace]: createInitMarketplaceTransaction,
    [InstructionType.InitProduct]: createInitProductTransaction,
    [InstructionType.InitProductTree]: createInitProductTreeTransaction,
    [InstructionType.InitReward]: createInitRewardTransaction,
    [InstructionType.InitRewardVault]: createInitRewardVaultTransaction,
    [InstructionType.RegisterBuy]: createRegisterBuyTransaction,
    [InstructionType.RegisterBuyCnft]: createRegisterBuyCnftTransaction,
    [InstructionType.RegisterBuyFungible]: createRegisterBuyFungibleTransaction,
    [InstructionType.RequestAccess]: createRequestAccessTransaction,
    [InstructionType.WithdrawReward]: createWithdrawRewardTransaction,
}
