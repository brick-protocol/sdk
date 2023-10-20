import { PublicKey } from "@solana/web3.js";
import { BRICK_PROGRAM_ID_PK } from "../constants";

export function deriveBrickPda(
    type: string,
    components: (PublicKey | Uint8Array)[],
): PublicKey {
    const buffers = components.map((component) => {
        if (component instanceof PublicKey) {
            return component.toBuffer();
        }
        if (component instanceof Uint8Array) {
            return component;
        }
        throw new Error("Invalid component type");
    });

    return PublicKey.findProgramAddressSync([Buffer.from(type, 'utf-8'), ...buffers], BRICK_PROGRAM_ID_PK)[0];
}