import {
  createActor as azleActor,
  canisterId as azleCanisterId,
} from "@/config/declarations/dfx_generated";
import { _SERVICE } from "@/config/declarations/dfx_generated/azle.did";


export const makeActorAzle = async (canisterId: string, createActor: any) => {
  console.log("🚀 ~ file: actor.ts:9 ~ makeActorAzle ~ canisterId:", canisterId)
  return await createActor(canisterId, {
    agentOptions: {
      host: process.env.NEXT_PUBLIC_IC_HOST,
    },
  });
};

export function makeAzleActor() {
  return makeActorAzle(
    process.env.NEXT_PUBLIC_CANISTER_ID_AZLE!,
    azleActor
  );
}
