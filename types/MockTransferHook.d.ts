/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MockTransferHookInterface extends ethers.utils.Interface {
  functions: {
    "onTransfer(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onTransfer",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "onTransfer", data: BytesLike): Result;

  events: {
    "MockHookEvent()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MockHookEvent"): EventFragment;
}

export class MockTransferHook extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockTransferHookInterface;

  functions: {
    onTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  onTransfer(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    onTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;
  };

  filters: {
    MockHookEvent(): EventFilter;
  };

  estimateGas: {
    onTransfer(
      from: string,
      to: string,
      amount: BigNumberish
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onTransfer(
      from: string,
      to: string,
      amount: BigNumberish
    ): Promise<PopulatedTransaction>;
  };
}
