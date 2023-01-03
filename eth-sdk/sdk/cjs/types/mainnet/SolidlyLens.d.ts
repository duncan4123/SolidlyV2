import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace ISolidlyLens {
    type PositionBribeStruct = {
        bribeTokenAddress: PromiseOrValue<string>;
        earned: PromiseOrValue<BigNumberish>;
    };
    type PositionBribeStructOutput = [string, BigNumber] & {
        bribeTokenAddress: string;
        earned: BigNumber;
    };
    type PositionBribesByTokenIdStruct = {
        tokenId: PromiseOrValue<BigNumberish>;
        bribes: ISolidlyLens.PositionBribeStruct[];
    };
    type PositionBribesByTokenIdStructOutput = [
        BigNumber,
        ISolidlyLens.PositionBribeStructOutput[]
    ] & {
        tokenId: BigNumber;
        bribes: ISolidlyLens.PositionBribeStructOutput[];
    };
    type PoolStruct = {
        id: PromiseOrValue<string>;
        symbol: PromiseOrValue<string>;
        stable: PromiseOrValue<boolean>;
        token0Address: PromiseOrValue<string>;
        token1Address: PromiseOrValue<string>;
        gaugeAddress: PromiseOrValue<string>;
        bribeAddress: PromiseOrValue<string>;
        bribeTokensAddresses: PromiseOrValue<string>[];
        fees: PromiseOrValue<string>;
        totalSupply: PromiseOrValue<BigNumberish>;
        feeDistAddress: PromiseOrValue<string>;
    };
    type PoolStructOutput = [
        string,
        string,
        boolean,
        string,
        string,
        string,
        string,
        string[],
        string,
        BigNumber,
        string
    ] & {
        id: string;
        symbol: string;
        stable: boolean;
        token0Address: string;
        token1Address: string;
        gaugeAddress: string;
        bribeAddress: string;
        bribeTokensAddresses: string[];
        fees: string;
        totalSupply: BigNumber;
        feeDistAddress: string;
    };
    type PoolReserveDataStruct = {
        id: PromiseOrValue<string>;
        token0Address: PromiseOrValue<string>;
        token1Address: PromiseOrValue<string>;
        token0Reserve: PromiseOrValue<BigNumberish>;
        token1Reserve: PromiseOrValue<BigNumberish>;
        token0Decimals: PromiseOrValue<BigNumberish>;
        token1Decimals: PromiseOrValue<BigNumberish>;
    };
    type PoolReserveDataStructOutput = [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        id: string;
        token0Address: string;
        token1Address: string;
        token0Reserve: BigNumber;
        token1Reserve: BigNumber;
        token0Decimals: number;
        token1Decimals: number;
    };
    type PositionPoolStruct = {
        id: PromiseOrValue<string>;
        balanceOf: PromiseOrValue<BigNumberish>;
    };
    type PositionPoolStructOutput = [string, BigNumber] & {
        id: string;
        balanceOf: BigNumber;
    };
    type PositionVeStruct = {
        tokenId: PromiseOrValue<BigNumberish>;
        balanceOf: PromiseOrValue<BigNumberish>;
        locked: PromiseOrValue<BigNumberish>;
    };
    type PositionVeStructOutput = [BigNumber, BigNumber, BigNumber] & {
        tokenId: BigNumber;
        balanceOf: BigNumber;
        locked: BigNumber;
    };
}
export declare namespace SolidlyLens {
    type ProtocolMetadataStruct = {
        veAddress: PromiseOrValue<string>;
        solidAddress: PromiseOrValue<string>;
        voterAddress: PromiseOrValue<string>;
        poolsFactoryAddress: PromiseOrValue<string>;
        gaugesFactoryAddress: PromiseOrValue<string>;
        minterAddress: PromiseOrValue<string>;
    };
    type ProtocolMetadataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        veAddress: string;
        solidAddress: string;
        voterAddress: string;
        poolsFactoryAddress: string;
        gaugesFactoryAddress: string;
        minterAddress: string;
    };
}
export interface SolidlyLensInterface extends utils.Interface {
    functions: {
        "bribeAddresByPoolAddress(address)": FunctionFragment;
        "bribeTokensAddressesByBribeAddress(address)": FunctionFragment;
        "bribeTokensAddressesByPoolAddress(address)": FunctionFragment;
        "bribesAddresses()": FunctionFragment;
        "bribesPositionsOf(address,address,uint256)": FunctionFragment;
        "bribesPositionsOf(address,address)": FunctionFragment;
        "deployerAddress()": FunctionFragment;
        "feeDistAddressByPoolAddress(address)": FunctionFragment;
        "gaugeAddressByPoolAddress(address)": FunctionFragment;
        "gaugesAddresses()": FunctionFragment;
        "gaugesFactoryAddress()": FunctionFragment;
        "generalFeesAddress()": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "initializeProxyStorage(address,address,address,address)": FunctionFragment;
        "libraryAddress()": FunctionFragment;
        "minterAddress()": FunctionFragment;
        "ownerAddress()": FunctionFragment;
        "poolInfo(address)": FunctionFragment;
        "poolReservesInfo(address)": FunctionFragment;
        "poolsAddresses()": FunctionFragment;
        "poolsFactoryAddress()": FunctionFragment;
        "poolsInfo()": FunctionFragment;
        "poolsLength()": FunctionFragment;
        "poolsPositionsOf(address)": FunctionFragment;
        "poolsPositionsOf(address,uint256,uint256)": FunctionFragment;
        "poolsReservesInfo(address[])": FunctionFragment;
        "protocolMetadata()": FunctionFragment;
        "routerAddress()": FunctionFragment;
        "setOwnerAddress(address)": FunctionFragment;
        "setVeAddress(address)": FunctionFragment;
        "solidAddress()": FunctionFragment;
        "veAddress()": FunctionFragment;
        "veDistAddress()": FunctionFragment;
        "vePositionsOf(address)": FunctionFragment;
        "veTokensIdsOf(address)": FunctionFragment;
        "voterAddress()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bribeAddresByPoolAddress" | "bribeTokensAddressesByBribeAddress" | "bribeTokensAddressesByPoolAddress" | "bribesAddresses" | "bribesPositionsOf(address,address,uint256)" | "bribesPositionsOf(address,address)" | "deployerAddress" | "feeDistAddressByPoolAddress" | "gaugeAddressByPoolAddress" | "gaugesAddresses" | "gaugesFactoryAddress" | "generalFeesAddress" | "governanceAddress" | "initializeProxyStorage" | "libraryAddress" | "minterAddress" | "ownerAddress" | "poolInfo" | "poolReservesInfo" | "poolsAddresses" | "poolsFactoryAddress" | "poolsInfo" | "poolsLength" | "poolsPositionsOf(address)" | "poolsPositionsOf(address,uint256,uint256)" | "poolsReservesInfo" | "protocolMetadata" | "routerAddress" | "setOwnerAddress" | "setVeAddress" | "solidAddress" | "veAddress" | "veDistAddress" | "vePositionsOf" | "veTokensIdsOf" | "voterAddress"): FunctionFragment;
    encodeFunctionData(functionFragment: "bribeAddresByPoolAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bribeTokensAddressesByBribeAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bribeTokensAddressesByPoolAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bribesAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "bribesPositionsOf(address,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "bribesPositionsOf(address,address)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "deployerAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeDistAddressByPoolAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "gaugeAddressByPoolAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "gaugesAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaugesFactoryAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "generalFeesAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeProxyStorage", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "libraryAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "minterAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "poolReservesInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "poolsAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolsFactoryAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolsInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolsLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolsPositionsOf(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "poolsPositionsOf(address,uint256,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "poolsReservesInfo", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "protocolMetadata", values?: undefined): string;
    encodeFunctionData(functionFragment: "routerAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "setOwnerAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setVeAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "solidAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "veAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "veDistAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "vePositionsOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "veTokensIdsOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "voterAddress", values?: undefined): string;
    decodeFunctionResult(functionFragment: "bribeAddresByPoolAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bribeTokensAddressesByBribeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bribeTokensAddressesByPoolAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bribesAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bribesPositionsOf(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bribesPositionsOf(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeDistAddressByPoolAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaugeAddressByPoolAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaugesAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaugesFactoryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generalFeesAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeProxyStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "libraryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minterAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolReservesInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolsAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolsFactoryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolsInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolsLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolsPositionsOf(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolsPositionsOf(address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolsReservesInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwnerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "solidAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veDistAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vePositionsOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veTokensIdsOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voterAddress", data: BytesLike): Result;
    events: {};
}
export interface SolidlyLens extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SolidlyLensInterface;
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
        bribeAddresByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        bribeTokensAddressesByBribeAddress(bribeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        bribeTokensAddressesByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        bribesAddresses(overrides?: CallOverrides): Promise<[string[]]>;
        "bribesPositionsOf(address,address,uint256)"(accountAddress: PromiseOrValue<string>, poolAddress: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[ISolidlyLens.PositionBribeStructOutput[]]>;
        "bribesPositionsOf(address,address)"(accountAddress: PromiseOrValue<string>, poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[ISolidlyLens.PositionBribesByTokenIdStructOutput[]]>;
        deployerAddress(overrides?: CallOverrides): Promise<[string]>;
        feeDistAddressByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        gaugeAddressByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        gaugesAddresses(overrides?: CallOverrides): Promise<[string[]]>;
        gaugesFactoryAddress(overrides?: CallOverrides): Promise<[string]>;
        generalFeesAddress(overrides?: CallOverrides): Promise<[string]>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        initializeProxyStorage(_veAddress: PromiseOrValue<string>, _routerAddress: PromiseOrValue<string>, _libraryAddress: PromiseOrValue<string>, _deployerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        libraryAddress(overrides?: CallOverrides): Promise<[string]>;
        minterAddress(overrides?: CallOverrides): Promise<[string]>;
        ownerAddress(overrides?: CallOverrides): Promise<[string]>;
        poolInfo(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[ISolidlyLens.PoolStructOutput]>;
        poolReservesInfo(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[ISolidlyLens.PoolReserveDataStructOutput]>;
        poolsAddresses(overrides?: CallOverrides): Promise<[string[]]>;
        poolsFactoryAddress(overrides?: CallOverrides): Promise<[string]>;
        poolsInfo(overrides?: CallOverrides): Promise<[ISolidlyLens.PoolStructOutput[]]>;
        poolsLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        "poolsPositionsOf(address)"(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[ISolidlyLens.PositionPoolStructOutput[]]>;
        "poolsPositionsOf(address,uint256,uint256)"(accountAddress: PromiseOrValue<string>, startIndex: PromiseOrValue<BigNumberish>, endIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[ISolidlyLens.PositionPoolStructOutput[]]>;
        poolsReservesInfo(_poolsAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[ISolidlyLens.PoolReserveDataStructOutput[]]>;
        protocolMetadata(overrides?: CallOverrides): Promise<[SolidlyLens.ProtocolMetadataStructOutput]>;
        routerAddress(overrides?: CallOverrides): Promise<[string]>;
        setOwnerAddress(_ownerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVeAddress(_veAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        solidAddress(overrides?: CallOverrides): Promise<[string]>;
        veAddress(overrides?: CallOverrides): Promise<[string]>;
        veDistAddress(overrides?: CallOverrides): Promise<[string]>;
        vePositionsOf(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[ISolidlyLens.PositionVeStructOutput[]]>;
        veTokensIdsOf(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        voterAddress(overrides?: CallOverrides): Promise<[string]>;
    };
    bribeAddresByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    bribeTokensAddressesByBribeAddress(bribeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    bribeTokensAddressesByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    bribesAddresses(overrides?: CallOverrides): Promise<string[]>;
    "bribesPositionsOf(address,address,uint256)"(accountAddress: PromiseOrValue<string>, poolAddress: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ISolidlyLens.PositionBribeStructOutput[]>;
    "bribesPositionsOf(address,address)"(accountAddress: PromiseOrValue<string>, poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISolidlyLens.PositionBribesByTokenIdStructOutput[]>;
    deployerAddress(overrides?: CallOverrides): Promise<string>;
    feeDistAddressByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    gaugeAddressByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    gaugesAddresses(overrides?: CallOverrides): Promise<string[]>;
    gaugesFactoryAddress(overrides?: CallOverrides): Promise<string>;
    generalFeesAddress(overrides?: CallOverrides): Promise<string>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    initializeProxyStorage(_veAddress: PromiseOrValue<string>, _routerAddress: PromiseOrValue<string>, _libraryAddress: PromiseOrValue<string>, _deployerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    libraryAddress(overrides?: CallOverrides): Promise<string>;
    minterAddress(overrides?: CallOverrides): Promise<string>;
    ownerAddress(overrides?: CallOverrides): Promise<string>;
    poolInfo(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISolidlyLens.PoolStructOutput>;
    poolReservesInfo(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISolidlyLens.PoolReserveDataStructOutput>;
    poolsAddresses(overrides?: CallOverrides): Promise<string[]>;
    poolsFactoryAddress(overrides?: CallOverrides): Promise<string>;
    poolsInfo(overrides?: CallOverrides): Promise<ISolidlyLens.PoolStructOutput[]>;
    poolsLength(overrides?: CallOverrides): Promise<BigNumber>;
    "poolsPositionsOf(address)"(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISolidlyLens.PositionPoolStructOutput[]>;
    "poolsPositionsOf(address,uint256,uint256)"(accountAddress: PromiseOrValue<string>, startIndex: PromiseOrValue<BigNumberish>, endIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ISolidlyLens.PositionPoolStructOutput[]>;
    poolsReservesInfo(_poolsAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<ISolidlyLens.PoolReserveDataStructOutput[]>;
    protocolMetadata(overrides?: CallOverrides): Promise<SolidlyLens.ProtocolMetadataStructOutput>;
    routerAddress(overrides?: CallOverrides): Promise<string>;
    setOwnerAddress(_ownerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVeAddress(_veAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    solidAddress(overrides?: CallOverrides): Promise<string>;
    veAddress(overrides?: CallOverrides): Promise<string>;
    veDistAddress(overrides?: CallOverrides): Promise<string>;
    vePositionsOf(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISolidlyLens.PositionVeStructOutput[]>;
    veTokensIdsOf(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
    voterAddress(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        bribeAddresByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        bribeTokensAddressesByBribeAddress(bribeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        bribeTokensAddressesByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        bribesAddresses(overrides?: CallOverrides): Promise<string[]>;
        "bribesPositionsOf(address,address,uint256)"(accountAddress: PromiseOrValue<string>, poolAddress: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ISolidlyLens.PositionBribeStructOutput[]>;
        "bribesPositionsOf(address,address)"(accountAddress: PromiseOrValue<string>, poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISolidlyLens.PositionBribesByTokenIdStructOutput[]>;
        deployerAddress(overrides?: CallOverrides): Promise<string>;
        feeDistAddressByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        gaugeAddressByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        gaugesAddresses(overrides?: CallOverrides): Promise<string[]>;
        gaugesFactoryAddress(overrides?: CallOverrides): Promise<string>;
        generalFeesAddress(overrides?: CallOverrides): Promise<string>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        initializeProxyStorage(_veAddress: PromiseOrValue<string>, _routerAddress: PromiseOrValue<string>, _libraryAddress: PromiseOrValue<string>, _deployerAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        libraryAddress(overrides?: CallOverrides): Promise<string>;
        minterAddress(overrides?: CallOverrides): Promise<string>;
        ownerAddress(overrides?: CallOverrides): Promise<string>;
        poolInfo(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISolidlyLens.PoolStructOutput>;
        poolReservesInfo(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISolidlyLens.PoolReserveDataStructOutput>;
        poolsAddresses(overrides?: CallOverrides): Promise<string[]>;
        poolsFactoryAddress(overrides?: CallOverrides): Promise<string>;
        poolsInfo(overrides?: CallOverrides): Promise<ISolidlyLens.PoolStructOutput[]>;
        poolsLength(overrides?: CallOverrides): Promise<BigNumber>;
        "poolsPositionsOf(address)"(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISolidlyLens.PositionPoolStructOutput[]>;
        "poolsPositionsOf(address,uint256,uint256)"(accountAddress: PromiseOrValue<string>, startIndex: PromiseOrValue<BigNumberish>, endIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ISolidlyLens.PositionPoolStructOutput[]>;
        poolsReservesInfo(_poolsAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<ISolidlyLens.PoolReserveDataStructOutput[]>;
        protocolMetadata(overrides?: CallOverrides): Promise<SolidlyLens.ProtocolMetadataStructOutput>;
        routerAddress(overrides?: CallOverrides): Promise<string>;
        setOwnerAddress(_ownerAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setVeAddress(_veAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        solidAddress(overrides?: CallOverrides): Promise<string>;
        veAddress(overrides?: CallOverrides): Promise<string>;
        veDistAddress(overrides?: CallOverrides): Promise<string>;
        vePositionsOf(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISolidlyLens.PositionVeStructOutput[]>;
        veTokensIdsOf(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        voterAddress(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        bribeAddresByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bribeTokensAddressesByBribeAddress(bribeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bribeTokensAddressesByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bribesAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        "bribesPositionsOf(address,address,uint256)"(accountAddress: PromiseOrValue<string>, poolAddress: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "bribesPositionsOf(address,address)"(accountAddress: PromiseOrValue<string>, poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        deployerAddress(overrides?: CallOverrides): Promise<BigNumber>;
        feeDistAddressByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        gaugeAddressByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        gaugesAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        gaugesFactoryAddress(overrides?: CallOverrides): Promise<BigNumber>;
        generalFeesAddress(overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        initializeProxyStorage(_veAddress: PromiseOrValue<string>, _routerAddress: PromiseOrValue<string>, _libraryAddress: PromiseOrValue<string>, _deployerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        libraryAddress(overrides?: CallOverrides): Promise<BigNumber>;
        minterAddress(overrides?: CallOverrides): Promise<BigNumber>;
        ownerAddress(overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolReservesInfo(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolsAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        poolsFactoryAddress(overrides?: CallOverrides): Promise<BigNumber>;
        poolsInfo(overrides?: CallOverrides): Promise<BigNumber>;
        poolsLength(overrides?: CallOverrides): Promise<BigNumber>;
        "poolsPositionsOf(address)"(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "poolsPositionsOf(address,uint256,uint256)"(accountAddress: PromiseOrValue<string>, startIndex: PromiseOrValue<BigNumberish>, endIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        poolsReservesInfo(_poolsAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        protocolMetadata(overrides?: CallOverrides): Promise<BigNumber>;
        routerAddress(overrides?: CallOverrides): Promise<BigNumber>;
        setOwnerAddress(_ownerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVeAddress(_veAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        solidAddress(overrides?: CallOverrides): Promise<BigNumber>;
        veAddress(overrides?: CallOverrides): Promise<BigNumber>;
        veDistAddress(overrides?: CallOverrides): Promise<BigNumber>;
        vePositionsOf(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        veTokensIdsOf(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        voterAddress(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bribeAddresByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bribeTokensAddressesByBribeAddress(bribeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bribeTokensAddressesByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bribesAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "bribesPositionsOf(address,address,uint256)"(accountAddress: PromiseOrValue<string>, poolAddress: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "bribesPositionsOf(address,address)"(accountAddress: PromiseOrValue<string>, poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeDistAddressByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaugeAddressByPoolAddress(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaugesAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaugesFactoryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generalFeesAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializeProxyStorage(_veAddress: PromiseOrValue<string>, _routerAddress: PromiseOrValue<string>, _libraryAddress: PromiseOrValue<string>, _deployerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        libraryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minterAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolInfo(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolReservesInfo(poolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolsAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolsFactoryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolsInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "poolsPositionsOf(address)"(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "poolsPositionsOf(address,uint256,uint256)"(accountAddress: PromiseOrValue<string>, startIndex: PromiseOrValue<BigNumberish>, endIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolsReservesInfo(_poolsAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolMetadata(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        routerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setOwnerAddress(_ownerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVeAddress(_veAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        solidAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        veAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        veDistAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vePositionsOf(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        veTokensIdsOf(accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voterAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
