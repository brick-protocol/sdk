export * from './solita'
export * from './compression'

import { InstructionType } from '../types';
import { IX_ACCOUNTS_LAYOUT, IX_DATA_LAYOUT, getInstructionType } from './solita';

export const BrickLayout = {
    accountLayoutMap: IX_ACCOUNTS_LAYOUT,
    dataLayoutMap: IX_DATA_LAYOUT,
    eventType: InstructionType,
    getInstructionType,
}