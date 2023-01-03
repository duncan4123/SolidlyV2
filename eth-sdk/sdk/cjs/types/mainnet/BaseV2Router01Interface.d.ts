import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace BaseV2Router01Interface {
    type RouteStruct = {
        from: PromiseOrValue<string>;
        to: PromiseOrValue<string>;
        stable: PromiseOrValue<boolean>;
    };
    type RouteStructOutput = [string, string, boolean] & {
        from: string;
        to: string;
        stable: boolean;
    };
}
export interface BaseV2Router01InterfaceInterface extends utils.Interface {
    functions: {
        "UNSAFE_swapExactTokensForTokens(uint256[],(address,address,bool)[],address,uint256)": FunctionFragment;
        "addLiquidity(address,address,bool,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "addLiquidityFTM(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "factory()": FunctionFragment;
        "getAmountOut(uint256,address,address)": FunctionFragment;
        "getAmountsOut(uint256,(address,address,bool)[])": FunctionFragment;
        "getReserves(address,address,bool)": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "isPair(address)": FunctionFragment;
        "pairFor(address,address,bool)": FunctionFragment;
        "quoteAddLiquidity(address,address,bool,uint256,uint256)": FunctionFragment;
        "quoteRemoveLiquidity(address,address,bool,uint256)": FunctionFragment;
        "removeLiquidity(address,address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityFTM(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityFTMWithPermit(address,bool,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "removeLiquidityWithPermit(address,address,bool,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "sortTokens(address,address)": FunctionFragment;
        "swapExactFTMForTokens(uint256,(address,address,bool)[],address,uint256)": FunctionFragment;
        "swapExactTokensForFTM(uint256,uint256,(address,address,bool)[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,(address,address,bool)[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokensSimple(uint256,uint256,address,address,bool,address,uint256)": FunctionFragment;
        "wftm()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "UNSAFE_swapExactTokensForTokens" | "addLiquidity" | "addLiquidityFTM" | "factory" | "getAmountOut" | "getAmountsOut" | "getReserves" | "governanceAddress" | "initialize" | "isPair" | "pairFor" | "quoteAddLiquidity" | "quoteRemoveLiquidity" | "removeLiquidity" | "removeLiquidityFTM" | "removeLiquidityFTMWithPermit" | "removeLiquidityWithPermit" | "sortTokens" | "swapExactFTMForTokens" | "swapExactTokensForFTM" | "swapExactTokensForTokens" | "swapExactTokensForTokensSimple" | "wftm"): FunctionFragment;
    encodeFunctionData(functionFragment: "UNSAFE_swapExactTokensForTokens", values: [
        PromiseOrValue<BigNumberish>[],
        BaseV2Router01Interface.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "addLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "addLiquidityFTM", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getAmountsOut", values: [
        PromiseOrValue<BigNumberish>,
        BaseV2Router01Interface.RouteStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "getReserves", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isPair", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pairFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "quoteAddLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "quoteRemoveLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityFTM", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityFTMWithPermit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityWithPermit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sortTokens", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "swapExactFTMForTokens", values: [
        PromiseOrValue<BigNumberish>,
        BaseV2Router01Interface.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForFTM", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        BaseV2Router01Interface.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        BaseV2Router01Interface.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokensSimple", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "wftm", values?: undefined): string;
    decodeFunctionResult(functionFragment: "UNSAFE_swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidityFTM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteAddLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteRemoveLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityFTM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityFTMWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sortTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactFTMForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForFTM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokensSimple", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wftm", data: BytesLike): Result;
    events: {};
}
export interface BaseV2Router01Interface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseV2Router01InterfaceInterface;
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
        UNSAFE_swapExactTokensForTokens(amounts: PromiseOrValue<BigNumberish>[], routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addLiquidityFTM(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            amount: BigNumber;
            stable: boolean;
        }>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        initialize(_factory: PromiseOrValue<string>, _wftm: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isPair(pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        pairFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string] & {
            pair: string;
        }>;
        quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityFTM(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityFTMWithPermit(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string] & {
            token0: string;
            token1: string;
        }>;
        swapExactFTMForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForFTM(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokensSimple(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, tokenFrom: PromiseOrValue<string>, tokenTo: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        wftm(overrides?: CallOverrides): Promise<[string]>;
    };
    UNSAFE_swapExactTokensForTokens(amounts: PromiseOrValue<BigNumberish>[], routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addLiquidityFTM(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        amount: BigNumber;
        stable: boolean;
    }>;
    getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        reserveA: BigNumber;
        reserveB: BigNumber;
    }>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    initialize(_factory: PromiseOrValue<string>, _wftm: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isPair(pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    pairFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
    quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
    }>;
    quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amountA: BigNumber;
        amountB: BigNumber;
    }>;
    removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityFTM(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityFTMWithPermit(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string] & {
        token0: string;
        token1: string;
    }>;
    swapExactFTMForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForFTM(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokensSimple(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, tokenFrom: PromiseOrValue<string>, tokenTo: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    wftm(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        UNSAFE_swapExactTokensForTokens(amounts: PromiseOrValue<BigNumberish>[], routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        addLiquidityFTM(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountFTM: BigNumber;
            liquidity: BigNumber;
        }>;
        factory(overrides?: CallOverrides): Promise<string>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            amount: BigNumber;
            stable: boolean;
        }>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        initialize(_factory: PromiseOrValue<string>, _wftm: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isPair(pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        pairFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        removeLiquidityFTM(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountFTM: BigNumber;
        }>;
        removeLiquidityFTMWithPermit(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountFTM: BigNumber;
        }>;
        removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string] & {
            token0: string;
            token1: string;
        }>;
        swapExactFTMForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForFTM(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForTokensSimple(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, tokenFrom: PromiseOrValue<string>, tokenTo: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        wftm(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        UNSAFE_swapExactTokensForTokens(amounts: PromiseOrValue<BigNumberish>[], routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addLiquidityFTM(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_factory: PromiseOrValue<string>, _wftm: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isPair(pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        pairFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityFTM(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityFTMWithPermit(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        swapExactFTMForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForFTM(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokensSimple(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, tokenFrom: PromiseOrValue<string>, tokenTo: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        wftm(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        UNSAFE_swapExactTokensForTokens(amounts: PromiseOrValue<BigNumberish>[], routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addLiquidityFTM(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_factory: PromiseOrValue<string>, _wftm: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isPair(pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityFTM(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityFTMWithPermit(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountFTMMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapExactFTMForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForFTM(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: BaseV2Router01Interface.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokensSimple(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, tokenFrom: PromiseOrValue<string>, tokenTo: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        wftm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
