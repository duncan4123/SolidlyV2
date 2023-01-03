import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface BaseV2FeesFactoryInterfaceInterface extends utils.Interface {
    functions: {
        "childInterfaceAddress()": FunctionFragment;
        "childSubImplementationAddress()": FunctionFragment;
        "createFees()": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "interfaceSourceAddress()": FunctionFragment;
        "updateChildInterfaceAddress(address)": FunctionFragment;
        "updateChildSubImplementationAddress(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "childInterfaceAddress" | "childSubImplementationAddress" | "createFees" | "governanceAddress" | "interfaceSourceAddress" | "updateChildInterfaceAddress" | "updateChildSubImplementationAddress"): FunctionFragment;
    encodeFunctionData(functionFragment: "childInterfaceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "childSubImplementationAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "createFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "interfaceSourceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateChildInterfaceAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateChildSubImplementationAddress", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "childInterfaceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "childSubImplementationAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interfaceSourceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateChildInterfaceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateChildSubImplementationAddress", data: BytesLike): Result;
    events: {};
}
export interface BaseV2FeesFactoryInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseV2FeesFactoryInterfaceInterface;
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
        childInterfaceAddress(overrides?: CallOverrides): Promise<[string] & {
            _childInterface: string;
        }>;
        childSubImplementationAddress(overrides?: CallOverrides): Promise<[string] & {
            _childSubImplementation: string;
        }>;
        createFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        interfaceSourceAddress(overrides?: CallOverrides): Promise<[string]>;
        updateChildInterfaceAddress(_childInterfaceAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateChildSubImplementationAddress(_childSubImplementationAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    childInterfaceAddress(overrides?: CallOverrides): Promise<string>;
    childSubImplementationAddress(overrides?: CallOverrides): Promise<string>;
    createFees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    interfaceSourceAddress(overrides?: CallOverrides): Promise<string>;
    updateChildInterfaceAddress(_childInterfaceAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateChildSubImplementationAddress(_childSubImplementationAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        childInterfaceAddress(overrides?: CallOverrides): Promise<string>;
        childSubImplementationAddress(overrides?: CallOverrides): Promise<string>;
        createFees(overrides?: CallOverrides): Promise<string>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        interfaceSourceAddress(overrides?: CallOverrides): Promise<string>;
        updateChildInterfaceAddress(_childInterfaceAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateChildSubImplementationAddress(_childSubImplementationAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        childInterfaceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        childSubImplementationAddress(overrides?: CallOverrides): Promise<BigNumber>;
        createFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        interfaceSourceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        updateChildInterfaceAddress(_childInterfaceAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateChildSubImplementationAddress(_childSubImplementationAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        childInterfaceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        childSubImplementationAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        interfaceSourceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateChildInterfaceAddress(_childInterfaceAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateChildSubImplementationAddress(_childSubImplementationAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
