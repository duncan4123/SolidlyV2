import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface BaseV2MinterInterface extends utils.Interface {
    functions: {
        "_token()": FunctionFragment;
        "_ve()": FunctionFragment;
        "_ve_dist()": FunctionFragment;
        "_voter()": FunctionFragment;
        "a()": FunctionFragment;
        "active_period()": FunctionFragment;
        "b()": FunctionFragment;
        "bDecayRate()": FunctionFragment;
        "calculate_emission()": FunctionFragment;
        "calculate_growth(uint256)": FunctionFragment;
        "circulating_emission()": FunctionFragment;
        "circulating_supply()": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "humpFactor(uint256)": FunctionFragment;
        "initialMint(address[],uint256[],uint256)": FunctionFragment;
        "initialize(address,address,address)": FunctionFragment;
        "setEmissionsCurve(uint256,uint256,uint256)": FunctionFragment;
        "setHumpFactors(uint256[],uint256[])": FunctionFragment;
        "targetSupply()": FunctionFragment;
        "update_period()": FunctionFragment;
        "week()": FunctionFragment;
        "weekly()": FunctionFragment;
        "weekly_emission()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_token" | "_ve" | "_ve_dist" | "_voter" | "a" | "active_period" | "b" | "bDecayRate" | "calculate_emission" | "calculate_growth" | "circulating_emission" | "circulating_supply" | "governanceAddress" | "humpFactor" | "initialMint" | "initialize" | "setEmissionsCurve" | "setHumpFactors" | "targetSupply" | "update_period" | "week" | "weekly" | "weekly_emission"): FunctionFragment;
    encodeFunctionData(functionFragment: "_token", values?: undefined): string;
    encodeFunctionData(functionFragment: "_ve", values?: undefined): string;
    encodeFunctionData(functionFragment: "_ve_dist", values?: undefined): string;
    encodeFunctionData(functionFragment: "_voter", values?: undefined): string;
    encodeFunctionData(functionFragment: "a", values?: undefined): string;
    encodeFunctionData(functionFragment: "active_period", values?: undefined): string;
    encodeFunctionData(functionFragment: "b", values?: undefined): string;
    encodeFunctionData(functionFragment: "bDecayRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculate_emission", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculate_growth", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "circulating_emission", values?: undefined): string;
    encodeFunctionData(functionFragment: "circulating_supply", values?: undefined): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "humpFactor", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialMint", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setEmissionsCurve", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setHumpFactors", values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "targetSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "update_period", values?: undefined): string;
    encodeFunctionData(functionFragment: "week", values?: undefined): string;
    encodeFunctionData(functionFragment: "weekly", values?: undefined): string;
    encodeFunctionData(functionFragment: "weekly_emission", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_ve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_ve_dist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_voter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "a", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "active_period", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "b", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bDecayRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculate_emission", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculate_growth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "circulating_emission", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "circulating_supply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "humpFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEmissionsCurve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHumpFactors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "update_period", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "week", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weekly", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weekly_emission", data: BytesLike): Result;
    events: {
        "Mint(address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
}
export interface MintEventObject {
    sender: string;
    weekly: BigNumber;
    circulating_supply: BigNumber;
    circulating_emission: BigNumber;
}
export type MintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], MintEventObject>;
export type MintEventFilter = TypedEventFilter<MintEvent>;
export interface BaseV2Minter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseV2MinterInterface;
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
        _token(overrides?: CallOverrides): Promise<[string]>;
        _ve(overrides?: CallOverrides): Promise<[string]>;
        _ve_dist(overrides?: CallOverrides): Promise<[string]>;
        _voter(overrides?: CallOverrides): Promise<[string]>;
        a(overrides?: CallOverrides): Promise<[BigNumber]>;
        active_period(overrides?: CallOverrides): Promise<[BigNumber]>;
        b(overrides?: CallOverrides): Promise<[BigNumber]>;
        bDecayRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        calculate_emission(overrides?: CallOverrides): Promise<[BigNumber]>;
        calculate_growth(_minted: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        circulating_emission(overrides?: CallOverrides): Promise<[BigNumber]>;
        circulating_supply(overrides?: CallOverrides): Promise<[BigNumber]>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        humpFactor(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        initialMint(claimants: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], max: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(__voter: PromiseOrValue<string>, __ve: PromiseOrValue<string>, __ve_dist: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEmissionsCurve(_a: PromiseOrValue<BigNumberish>, _b: PromiseOrValue<BigNumberish>, _bDecayRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setHumpFactors(_periods: PromiseOrValue<BigNumberish>[], _humpFactors: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        targetSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        update_period(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        week(overrides?: CallOverrides): Promise<[BigNumber]>;
        weekly(overrides?: CallOverrides): Promise<[BigNumber]>;
        weekly_emission(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    _token(overrides?: CallOverrides): Promise<string>;
    _ve(overrides?: CallOverrides): Promise<string>;
    _ve_dist(overrides?: CallOverrides): Promise<string>;
    _voter(overrides?: CallOverrides): Promise<string>;
    a(overrides?: CallOverrides): Promise<BigNumber>;
    active_period(overrides?: CallOverrides): Promise<BigNumber>;
    b(overrides?: CallOverrides): Promise<BigNumber>;
    bDecayRate(overrides?: CallOverrides): Promise<BigNumber>;
    calculate_emission(overrides?: CallOverrides): Promise<BigNumber>;
    calculate_growth(_minted: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    circulating_emission(overrides?: CallOverrides): Promise<BigNumber>;
    circulating_supply(overrides?: CallOverrides): Promise<BigNumber>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    humpFactor(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    initialMint(claimants: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], max: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(__voter: PromiseOrValue<string>, __ve: PromiseOrValue<string>, __ve_dist: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEmissionsCurve(_a: PromiseOrValue<BigNumberish>, _b: PromiseOrValue<BigNumberish>, _bDecayRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setHumpFactors(_periods: PromiseOrValue<BigNumberish>[], _humpFactors: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    targetSupply(overrides?: CallOverrides): Promise<BigNumber>;
    update_period(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    week(overrides?: CallOverrides): Promise<BigNumber>;
    weekly(overrides?: CallOverrides): Promise<BigNumber>;
    weekly_emission(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        _token(overrides?: CallOverrides): Promise<string>;
        _ve(overrides?: CallOverrides): Promise<string>;
        _ve_dist(overrides?: CallOverrides): Promise<string>;
        _voter(overrides?: CallOverrides): Promise<string>;
        a(overrides?: CallOverrides): Promise<BigNumber>;
        active_period(overrides?: CallOverrides): Promise<BigNumber>;
        b(overrides?: CallOverrides): Promise<BigNumber>;
        bDecayRate(overrides?: CallOverrides): Promise<BigNumber>;
        calculate_emission(overrides?: CallOverrides): Promise<BigNumber>;
        calculate_growth(_minted: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        circulating_emission(overrides?: CallOverrides): Promise<BigNumber>;
        circulating_supply(overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        humpFactor(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialMint(claimants: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], max: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        initialize(__voter: PromiseOrValue<string>, __ve: PromiseOrValue<string>, __ve_dist: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setEmissionsCurve(_a: PromiseOrValue<BigNumberish>, _b: PromiseOrValue<BigNumberish>, _bDecayRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setHumpFactors(_periods: PromiseOrValue<BigNumberish>[], _humpFactors: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        targetSupply(overrides?: CallOverrides): Promise<BigNumber>;
        update_period(overrides?: CallOverrides): Promise<BigNumber>;
        week(overrides?: CallOverrides): Promise<BigNumber>;
        weekly(overrides?: CallOverrides): Promise<BigNumber>;
        weekly_emission(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Mint(address,uint256,uint256,uint256)"(sender?: PromiseOrValue<string> | null, weekly?: null, circulating_supply?: null, circulating_emission?: null): MintEventFilter;
        Mint(sender?: PromiseOrValue<string> | null, weekly?: null, circulating_supply?: null, circulating_emission?: null): MintEventFilter;
    };
    estimateGas: {
        _token(overrides?: CallOverrides): Promise<BigNumber>;
        _ve(overrides?: CallOverrides): Promise<BigNumber>;
        _ve_dist(overrides?: CallOverrides): Promise<BigNumber>;
        _voter(overrides?: CallOverrides): Promise<BigNumber>;
        a(overrides?: CallOverrides): Promise<BigNumber>;
        active_period(overrides?: CallOverrides): Promise<BigNumber>;
        b(overrides?: CallOverrides): Promise<BigNumber>;
        bDecayRate(overrides?: CallOverrides): Promise<BigNumber>;
        calculate_emission(overrides?: CallOverrides): Promise<BigNumber>;
        calculate_growth(_minted: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        circulating_emission(overrides?: CallOverrides): Promise<BigNumber>;
        circulating_supply(overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        humpFactor(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialMint(claimants: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], max: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(__voter: PromiseOrValue<string>, __ve: PromiseOrValue<string>, __ve_dist: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEmissionsCurve(_a: PromiseOrValue<BigNumberish>, _b: PromiseOrValue<BigNumberish>, _bDecayRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setHumpFactors(_periods: PromiseOrValue<BigNumberish>[], _humpFactors: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        targetSupply(overrides?: CallOverrides): Promise<BigNumber>;
        update_period(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        week(overrides?: CallOverrides): Promise<BigNumber>;
        weekly(overrides?: CallOverrides): Promise<BigNumber>;
        weekly_emission(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _ve_dist(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        a(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        active_period(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        b(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bDecayRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculate_emission(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculate_growth(_minted: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        circulating_emission(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        circulating_supply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        humpFactor(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialMint(claimants: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], max: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(__voter: PromiseOrValue<string>, __ve: PromiseOrValue<string>, __ve_dist: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEmissionsCurve(_a: PromiseOrValue<BigNumberish>, _b: PromiseOrValue<BigNumberish>, _bDecayRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setHumpFactors(_periods: PromiseOrValue<BigNumberish>[], _humpFactors: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        targetSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        update_period(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        week(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weekly(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weekly_emission(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
