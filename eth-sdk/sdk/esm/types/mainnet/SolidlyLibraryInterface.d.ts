import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface SolidlyLibraryInterfaceInterface extends utils.Interface {
    functions: {
        "getAmountOut(uint256,address,address,bool)": FunctionFragment;
        "getMinimumValue(address,address,bool)": FunctionFragment;
        "getSample(address,address,bool)": FunctionFragment;
        "getTradeDiff(uint256,address,address,bool)": FunctionFragment;
        "getTradeDiff(uint256,address,address)": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "router()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAmountOut" | "getMinimumValue" | "getSample" | "getTradeDiff(uint256,address,address,bool)" | "getTradeDiff(uint256,address,address)" | "governanceAddress" | "initialize" | "router"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAmountOut", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getMinimumValue", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getSample", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeDiff(uint256,address,address,bool)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeDiff(uint256,address,address)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinimumValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSample", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeDiff(uint256,address,address,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeDiff(uint256,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    events: {};
}
export interface SolidlyLibraryInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SolidlyLibraryInterfaceInterface;
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
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getMinimumValue(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getSample(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "getTradeDiff(uint256,address,address,bool)"(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            a: BigNumber;
            b: BigNumber;
        }>;
        "getTradeDiff(uint256,address,address)"(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            a: BigNumber;
            b: BigNumber;
        }>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        initialize(_router: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
    };
    getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    getMinimumValue(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getSample(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    "getTradeDiff(uint256,address,address,bool)"(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        a: BigNumber;
        b: BigNumber;
    }>;
    "getTradeDiff(uint256,address,address)"(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        a: BigNumber;
        b: BigNumber;
    }>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    initialize(_router: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getMinimumValue(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getSample(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "getTradeDiff(uint256,address,address,bool)"(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            a: BigNumber;
            b: BigNumber;
        }>;
        "getTradeDiff(uint256,address,address)"(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            a: BigNumber;
            b: BigNumber;
        }>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        initialize(_router: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        router(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getMinimumValue(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getSample(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "getTradeDiff(uint256,address,address,bool)"(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "getTradeDiff(uint256,address,address)"(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_router: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinimumValue(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSample(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getTradeDiff(uint256,address,address,bool)"(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getTradeDiff(uint256,address,address)"(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_router: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
