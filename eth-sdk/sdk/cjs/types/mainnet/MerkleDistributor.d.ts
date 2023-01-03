import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface MerkleDistributorInterface extends utils.Interface {
    functions: {
        "claim(uint256,address,uint256,bytes32[])": FunctionFragment;
        "claimFor(uint256,address,uint256,bytes32[],address)": FunctionFragment;
        "collectDust(address,uint256)": FunctionFragment;
        "isClaimed(uint256)": FunctionFragment;
        "merkleRoot()": FunctionFragment;
        "token()": FunctionFragment;
        "transferGovernance(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claim" | "claimFor" | "collectDust" | "isClaimed" | "merkleRoot" | "token" | "transferGovernance"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "claimFor", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "collectDust", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isClaimed", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "merkleRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferGovernance", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectDust", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferGovernance", data: BytesLike): Result;
    events: {
        "Claimed(uint256,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
}
export interface ClaimedEventObject {
    index: BigNumber;
    account: string;
    amount: BigNumber;
}
export type ClaimedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], ClaimedEventObject>;
export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;
export interface MerkleDistributor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MerkleDistributorInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        claim(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimFor(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collectDust(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isClaimed(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        merkleRoot(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferGovernance(governance_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    claim(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimFor(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], recipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collectDust(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isClaimed(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    merkleRoot(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    transferGovernance(governance_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claim(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        claimFor(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        collectDust(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        isClaimed(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        merkleRoot(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
        transferGovernance(governance_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Claimed(uint256,address,uint256)"(index?: null, account?: null, amount?: null): ClaimedEventFilter;
        Claimed(index?: null, account?: null, amount?: null): ClaimedEventFilter;
    };
    estimateGas: {
        claim(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimFor(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collectDust(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isClaimed(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferGovernance(governance_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimFor(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collectDust(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isClaimed(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferGovernance(governance_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
