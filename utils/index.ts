export * from './solita'
export * from './compression'

import { InstructionType } from '../types';
import { ACCOUNTS_DATA_LAYOUT, IX_ACCOUNTS_LAYOUT, IX_DATA_LAYOUT, getInstructionType } from './solita';

export const BrickLayout = {
    accountsLayoutMap: ACCOUNTS_DATA_LAYOUT,
    ixAccountsLayoutMap: IX_ACCOUNTS_LAYOUT,
    dataLayoutMap: IX_DATA_LAYOUT,
    eventType: InstructionType,
    getInstructionType,
}