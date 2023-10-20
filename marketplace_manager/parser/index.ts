import { instructionParsers } from "./instructions";
import { accountParsers } from "./accounts";
import { getAccountType, getInstructionType } from "../../utils";

export const parser = {
    instructionParsers,
    getInstructionType,
    accountParsers,
    getAccountType
}