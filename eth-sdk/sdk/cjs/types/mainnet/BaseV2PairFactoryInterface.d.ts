import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface BaseV2PairFactoryInterfaceInterface extends utils.Interface {
    functions: {
        "allPairs(uint256)": FunctionFragment;
        "allPairsLength()": FunctionFragment;
        "childInterfaceAddress()": FunctionFragment;
        "childSubImplementationAddress()": FunctionFragment;
        "createFees()": FunctionFragment;
        "createPair(address,address,bool)": FunctionFragment;
        "feesFactory()": FunctionFragment;
        "getPair(address,address,bool)": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "interfaceSourceAddress()": FunctionFragment;
        "isOperator(address)": FunctionFragment;
        "isPair(address)": FunctionFragment;
        "isPaused()": FunctionFragment;
        "pairCodeHash()": FunctionFragment;
        "poolSpecificFees(address)": FunctionFragment;
        "poolSpecificFeesEnabled(address)": FunctionFragment;
        "setOperator(address,bool)": FunctionFragment;
        "setPause(bool)": FunctionFragment;
        "setPoolSpecificFees(address,uint256,bool)": FunctionFragment;
        "setStableFees(uint256)": FunctionFragment;
        "setVolatileFees(uint256)": FunctionFragment;
        "stableFees()": FunctionFragment;
        "updateChildInterfaceAddress(address)": FunctionFragment;
        "updateChildSubImplementationAddress(address)": FunctionFragment;
        "volatileFees()": FunctionFragment;
        "voter()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allPairs" | "allPairsLength" | "childInterfaceAddress" | "childSubImplementationAddress" | "createFees" | "createPair" | "feesFactory" | "getPair" | "governanceAddress" | "initialize" | "interfaceSourceAddress" | "isOperator" | "isPair" | "isPaused" | "pairCodeHash" | "poolSpecificFees" | "poolSpecificFeesEnabled" | "setOperator" | "setPause" | "setPoolSpecificFees" | "setStableFees" | "setVolatileFees" | "stableFees" | "updateChildInterfaceAddress" | "updateChildSubImplementationAddress" | "volatileFees" | "voter"): FunctionFragment;
    encodeFunctionData(functionFragment: "allPairs", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "allPairsLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "childInterfaceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "childSubImplementationAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "createFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "createPair", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "feesFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPair", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "interfaceSourceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOperator", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isPair", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pairCodeHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolSpecificFees", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "poolSpecificFeesEnabled", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setOperator", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setPause", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setPoolSpecificFees", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "setStableFees", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setVolatileFees", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stableFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateChildInterfaceAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateChildSubImplementationAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "volatileFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "voter", values?: undefined): string;
    decodeFunctionResult(functionFragment: "allPairs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allPairsLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "childInterfaceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "childSubImplementationAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feesFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interfaceSourceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairCodeHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolSpecificFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolSpecificFeesEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolSpecificFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStableFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVolatileFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateChildInterfaceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateChildSubImplementationAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "volatileFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;
    events: {
        "OperatorStatus(address,bool)": EventFragment;
        "PairCreated(address,address,bool,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OperatorStatus"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PairCreated"): EventFragment;
}
export interface OperatorStatusEventObject {
    operator: string;
    state: boolean;
}
export type OperatorStatusEvent = TypedEvent<[
    string,
    boolean
], OperatorStatusEventObject>;
export type OperatorStatusEventFilter = TypedEventFilter<OperatorStatusEvent>;
export interface PairCreatedEventObject {
    token0: string;
    token1: string;
    stable: boolean;
    pair: string;
    arg4: BigNumber;
}
export type PairCreatedEvent = TypedEvent<[
    string,
    string,
    boolean,
    string,
    BigNumber
], PairCreatedEventObject>;
export type PairCreatedEventFilter = TypedEventFilter<PairCreatedEvent>;
export interface BaseV2PairFactoryInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseV2PairFactoryInterfaceInterface;
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
        allPairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        allPairsLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        childInterfaceAddress(overrides?: CallOverrides): Promise<[string] & {
            _childInterface: string;
        }>;
        childSubImplementationAddress(overrides?: CallOverrides): Promise<[string] & {
            _childSubImplementation: string;
        }>;
        createFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createPair(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        feesFactory(overrides?: CallOverrides): Promise<[string]>;
        getPair(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string]>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        initialize(_feesFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        interfaceSourceAddress(overrides?: CallOverrides): Promise<[string]>;
        isOperator(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isPair(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isPaused(overrides?: CallOverrides): Promise<[boolean]>;
        pairCodeHash(overrides?: CallOverrides): Promise<[string]>;
        poolSpecificFees(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        poolSpecificFeesEnabled(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        setOperator(operator: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPause(_state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPoolSpecificFees(_pool: PromiseOrValue<string>, _fees: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setStableFees(_stableFees: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVolatileFees(_volatileFees: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stableFees(overrides?: CallOverrides): Promise<[BigNumber]>;
        updateChildInterfaceAddress(_childInterfaceAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateChildSubImplementationAddress(_childSubImplementationAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        volatileFees(overrides?: CallOverrides): Promise<[BigNumber]>;
        voter(overrides?: CallOverrides): Promise<[string]>;
    };
    allPairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;
    childInterfaceAddress(overrides?: CallOverrides): Promise<string>;
    childSubImplementationAddress(overrides?: CallOverrides): Promise<string>;
    createFees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createPair(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    feesFactory(overrides?: CallOverrides): Promise<string>;
    getPair(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    initialize(_feesFactory: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    interfaceSourceAddress(overrides?: CallOverrides): Promise<string>;
    isOperator(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isPair(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isPaused(overrides?: CallOverrides): Promise<boolean>;
    pairCodeHash(overrides?: CallOverrides): Promise<string>;
    poolSpecificFees(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    poolSpecificFeesEnabled(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    setOperator(operator: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPause(_state: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPoolSpecificFees(_pool: PromiseOrValue<string>, _fees: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setStableFees(_stableFees: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVolatileFees(_volatileFees: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stableFees(overrides?: CallOverrides): Promise<BigNumber>;
    updateChildInterfaceAddress(_childInterfaceAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateChildSubImplementationAddress(_childSubImplementationAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    volatileFees(overrides?: CallOverrides): Promise<BigNumber>;
    voter(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        allPairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;
        childInterfaceAddress(overrides?: CallOverrides): Promise<string>;
        childSubImplementationAddress(overrides?: CallOverrides): Promise<string>;
        createFees(overrides?: CallOverrides): Promise<string>;
        createPair(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        feesFactory(overrides?: CallOverrides): Promise<string>;
        getPair(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        initialize(_feesFactory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        interfaceSourceAddress(overrides?: CallOverrides): Promise<string>;
        isOperator(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isPair(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isPaused(overrides?: CallOverrides): Promise<boolean>;
        pairCodeHash(overrides?: CallOverrides): Promise<string>;
        poolSpecificFees(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolSpecificFeesEnabled(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setOperator(operator: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setPause(_state: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setPoolSpecificFees(_pool: PromiseOrValue<string>, _fees: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setStableFees(_stableFees: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setVolatileFees(_volatileFees: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stableFees(overrides?: CallOverrides): Promise<BigNumber>;
        updateChildInterfaceAddress(_childInterfaceAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateChildSubImplementationAddress(_childSubImplementationAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        volatileFees(overrides?: CallOverrides): Promise<BigNumber>;
        voter(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "OperatorStatus(address,bool)"(operator?: PromiseOrValue<string> | null, state?: null): OperatorStatusEventFilter;
        OperatorStatus(operator?: PromiseOrValue<string> | null, state?: null): OperatorStatusEventFilter;
        "PairCreated(address,address,bool,address,uint256)"(token0?: PromiseOrValue<string> | null, token1?: PromiseOrValue<string> | null, stable?: null, pair?: null, arg4?: null): PairCreatedEventFilter;
        PairCreated(token0?: PromiseOrValue<string> | null, token1?: PromiseOrValue<string> | null, stable?: null, pair?: null, arg4?: null): PairCreatedEventFilter;
    };
    estimateGas: {
        allPairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;
        childInterfaceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        childSubImplementationAddress(overrides?: CallOverrides): Promise<BigNumber>;
        createFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createPair(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        feesFactory(overrides?: CallOverrides): Promise<BigNumber>;
        getPair(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_feesFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        interfaceSourceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        isOperator(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isPair(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isPaused(overrides?: CallOverrides): Promise<BigNumber>;
        pairCodeHash(overrides?: CallOverrides): Promise<BigNumber>;
        poolSpecificFees(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolSpecificFeesEnabled(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setOperator(operator: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPause(_state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPoolSpecificFees(_pool: PromiseOrValue<string>, _fees: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setStableFees(_stableFees: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVolatileFees(_volatileFees: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stableFees(overrides?: CallOverrides): Promise<BigNumber>;
        updateChildInterfaceAddress(_childInterfaceAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateChildSubImplementationAddress(_childSubImplementationAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        volatileFees(overrides?: CallOverrides): Promise<BigNumber>;
        voter(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        allPairs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allPairsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        childInterfaceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        childSubImplementationAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createPair(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        feesFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPair(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_feesFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        interfaceSourceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperator(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPair(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairCodeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolSpecificFees(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolSpecificFeesEnabled(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setOperator(operator: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPause(_state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPoolSpecificFees(_pool: PromiseOrValue<string>, _fees: PromiseOrValue<BigNumberish>, _enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setStableFees(_stableFees: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVolatileFees(_volatileFees: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stableFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateChildInterfaceAddress(_childInterfaceAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateChildSubImplementationAddress(_childSubImplementationAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        volatileFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
