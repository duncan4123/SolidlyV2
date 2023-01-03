import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface GaugeV2Interface extends utils.Interface {
    functions: {
        "_ve()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "bribe()": FunctionFragment;
        "claimFees()": FunctionFragment;
        "clawbackRewards(address,uint256)": FunctionFragment;
        "deposit(uint256,uint256)": FunctionFragment;
        "depositAll(uint256)": FunctionFragment;
        "depositAndOptIn(uint256,uint256,address[])": FunctionFragment;
        "derivedBalance(address)": FunctionFragment;
        "derivedBalances(address)": FunctionFragment;
        "derivedSupply()": FunctionFragment;
        "earned(address,address)": FunctionFragment;
        "emergencyOptOut(address[])": FunctionFragment;
        "factoryAddress()": FunctionFragment;
        "fees0()": FunctionFragment;
        "fees1()": FunctionFragment;
        "getReward(address,address[])": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "initialize(address,address,address,address)": FunctionFragment;
        "isOptIn(address,address)": FunctionFragment;
        "isReward(address)": FunctionFragment;
        "lastTimeRewardApplicable(address)": FunctionFragment;
        "lastUpdateTime(address)": FunctionFragment;
        "left(address)": FunctionFragment;
        "notifyRewardAmount(address,uint256)": FunctionFragment;
        "optIn(address[])": FunctionFragment;
        "optOut(address[])": FunctionFragment;
        "periodFinish(address)": FunctionFragment;
        "rewardData(address)": FunctionFragment;
        "rewardPerToken(address)": FunctionFragment;
        "rewardPerTokenStored(address)": FunctionFragment;
        "rewardRate(address)": FunctionFragment;
        "rewards(uint256)": FunctionFragment;
        "rewardsListLength()": FunctionFragment;
        "solid()": FunctionFragment;
        "stake()": FunctionFragment;
        "tokenIds(address)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "userOptIns(address,uint256)": FunctionFragment;
        "userOptInsIndex(address,address)": FunctionFragment;
        "userRewardData(address,address)": FunctionFragment;
        "userRewardPerTokenStored(address,address)": FunctionFragment;
        "voter()": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
        "withdrawAll()": FunctionFragment;
        "withdrawToken(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_ve" | "balanceOf" | "bribe" | "claimFees" | "clawbackRewards" | "deposit" | "depositAll" | "depositAndOptIn" | "derivedBalance" | "derivedBalances" | "derivedSupply" | "earned" | "emergencyOptOut" | "factoryAddress" | "fees0" | "fees1" | "getReward" | "governanceAddress" | "initialize" | "isOptIn" | "isReward" | "lastTimeRewardApplicable" | "lastUpdateTime" | "left" | "notifyRewardAmount" | "optIn" | "optOut" | "periodFinish" | "rewardData" | "rewardPerToken" | "rewardPerTokenStored" | "rewardRate" | "rewards" | "rewardsListLength" | "solid" | "stake" | "tokenIds" | "totalSupply" | "userOptIns" | "userOptInsIndex" | "userRewardData" | "userRewardPerTokenStored" | "voter" | "withdraw" | "withdrawAll" | "withdrawToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "_ve", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bribe", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "clawbackRewards", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "deposit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "depositAll", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "depositAndOptIn", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "derivedBalance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "derivedBalances", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "derivedSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "earned", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "emergencyOptOut", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "factoryAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "fees0", values?: undefined): string;
    encodeFunctionData(functionFragment: "fees1", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReward", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isOptIn", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isReward", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lastTimeRewardApplicable", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lastUpdateTime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "left", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "notifyRewardAmount", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "optIn", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "optOut", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "periodFinish", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewardData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewardPerToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewardPerTokenStored", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewardRate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewards", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rewardsListLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "solid", values?: undefined): string;
    encodeFunctionData(functionFragment: "stake", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenIds", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "userOptIns", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "userOptInsIndex", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "userRewardData", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "userRewardPerTokenStored", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "voter", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "_ve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bribe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clawbackRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositAndOptIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "derivedBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "derivedBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "derivedSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyOptOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factoryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fees0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fees1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOptIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastTimeRewardApplicable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdateTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "left", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "notifyRewardAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "optIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "optOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodFinish", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerTokenStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsListLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "solid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userOptIns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userOptInsIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userRewardData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userRewardPerTokenStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    events: {
        "ClaimFees(address,uint256,uint256)": EventFragment;
        "ClaimRewards(address,address,uint256)": EventFragment;
        "ClawbackRewards(address,uint256)": EventFragment;
        "Deposit(address,uint256,uint256)": EventFragment;
        "NotifyReward(address,address,uint256)": EventFragment;
        "OptIn(address,address)": EventFragment;
        "OptOut(address,address)": EventFragment;
        "Withdraw(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimFees"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClawbackRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NotifyReward"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OptIn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OptOut"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface ClaimFeesEventObject {
    from: string;
    claimed0: BigNumber;
    claimed1: BigNumber;
}
export type ClaimFeesEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], ClaimFeesEventObject>;
export type ClaimFeesEventFilter = TypedEventFilter<ClaimFeesEvent>;
export interface ClaimRewardsEventObject {
    from: string;
    reward: string;
    amount: BigNumber;
}
export type ClaimRewardsEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ClaimRewardsEventObject>;
export type ClaimRewardsEventFilter = TypedEventFilter<ClaimRewardsEvent>;
export interface ClawbackRewardsEventObject {
    reward: string;
    amount: BigNumber;
}
export type ClawbackRewardsEvent = TypedEvent<[
    string,
    BigNumber
], ClawbackRewardsEventObject>;
export type ClawbackRewardsEventFilter = TypedEventFilter<ClawbackRewardsEvent>;
export interface DepositEventObject {
    from: string;
    tokenId: BigNumber;
    amount: BigNumber;
}
export type DepositEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], DepositEventObject>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
export interface NotifyRewardEventObject {
    from: string;
    reward: string;
    amount: BigNumber;
}
export type NotifyRewardEvent = TypedEvent<[
    string,
    string,
    BigNumber
], NotifyRewardEventObject>;
export type NotifyRewardEventFilter = TypedEventFilter<NotifyRewardEvent>;
export interface OptInEventObject {
    from: string;
    reward: string;
}
export type OptInEvent = TypedEvent<[string, string], OptInEventObject>;
export type OptInEventFilter = TypedEventFilter<OptInEvent>;
export interface OptOutEventObject {
    from: string;
    reward: string;
}
export type OptOutEvent = TypedEvent<[string, string], OptOutEventObject>;
export type OptOutEventFilter = TypedEventFilter<OptOutEvent>;
export interface WithdrawEventObject {
    from: string;
    tokenId: BigNumber;
    amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface GaugeV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GaugeV2Interface;
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
        _ve(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        bribe(overrides?: CallOverrides): Promise<[string]>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        clawbackRewards(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositAll(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositAndOptIn(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, optInPools: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        derivedBalance(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        derivedBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        derivedSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        earned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        emergencyOptOut(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        factoryAddress(overrides?: CallOverrides): Promise<[string] & {
            _factory: string;
        }>;
        fees0(overrides?: CallOverrides): Promise<[BigNumber]>;
        fees1(overrides?: CallOverrides): Promise<[BigNumber]>;
        getReward(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        initialize(_stake: PromiseOrValue<string>, _bribe: PromiseOrValue<string>, __ve: PromiseOrValue<string>, _voter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isOptIn(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isReward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        lastTimeRewardApplicable(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        lastUpdateTime(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        optIn(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        optOut(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        periodFinish(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardData(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            number
        ] & {
            rewardRatePerWeek: BigNumber;
            derivedSupply: BigNumber;
            rewardPerTokenStored: BigNumber;
            periodFinish: number;
            lastUpdateTime: number;
        }>;
        rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardPerTokenStored(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardRate(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        rewardsListLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        solid(overrides?: CallOverrides): Promise<[string]>;
        stake(overrides?: CallOverrides): Promise<[string]>;
        tokenIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        userOptIns(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        userOptInsIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        userRewardData(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            userRewardPerTokenPaid: BigNumber;
            userEarnedStored: BigNumber;
        }>;
        userRewardPerTokenStored(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        voter(overrides?: CallOverrides): Promise<[string]>;
        withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawToken(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _ve(overrides?: CallOverrides): Promise<string>;
    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    bribe(overrides?: CallOverrides): Promise<string>;
    claimFees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    clawbackRewards(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositAll(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositAndOptIn(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, optInPools: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    derivedBalance(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    derivedBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    derivedSupply(overrides?: CallOverrides): Promise<BigNumber>;
    earned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    emergencyOptOut(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    factoryAddress(overrides?: CallOverrides): Promise<string>;
    fees0(overrides?: CallOverrides): Promise<BigNumber>;
    fees1(overrides?: CallOverrides): Promise<BigNumber>;
    getReward(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    initialize(_stake: PromiseOrValue<string>, _bribe: PromiseOrValue<string>, __ve: PromiseOrValue<string>, _voter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isOptIn(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isReward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    lastTimeRewardApplicable(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    lastUpdateTime(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    optIn(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    optOut(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    periodFinish(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    rewardData(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        rewardRatePerWeek: BigNumber;
        derivedSupply: BigNumber;
        rewardPerTokenStored: BigNumber;
        periodFinish: number;
        lastUpdateTime: number;
    }>;
    rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    rewardPerTokenStored(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    rewardRate(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;
    solid(overrides?: CallOverrides): Promise<string>;
    stake(overrides?: CallOverrides): Promise<string>;
    tokenIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    userOptIns(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    userOptInsIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    userRewardData(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        userRewardPerTokenPaid: BigNumber;
        userEarnedStored: BigNumber;
    }>;
    userRewardPerTokenStored(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    voter(overrides?: CallOverrides): Promise<string>;
    withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawAll(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawToken(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _ve(overrides?: CallOverrides): Promise<string>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bribe(overrides?: CallOverrides): Promise<string>;
        claimFees(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            claimed0: BigNumber;
            claimed1: BigNumber;
        }>;
        clawbackRewards(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        depositAll(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        depositAndOptIn(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, optInPools: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        derivedBalance(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        derivedBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        derivedSupply(overrides?: CallOverrides): Promise<BigNumber>;
        earned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        emergencyOptOut(tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        factoryAddress(overrides?: CallOverrides): Promise<string>;
        fees0(overrides?: CallOverrides): Promise<BigNumber>;
        fees1(overrides?: CallOverrides): Promise<BigNumber>;
        getReward(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        initialize(_stake: PromiseOrValue<string>, _bribe: PromiseOrValue<string>, __ve: PromiseOrValue<string>, _voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isOptIn(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isReward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        lastTimeRewardApplicable(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdateTime(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        optIn(tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        optOut(tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        periodFinish(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardData(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            number
        ] & {
            rewardRatePerWeek: BigNumber;
            derivedSupply: BigNumber;
            rewardPerTokenStored: BigNumber;
            periodFinish: number;
            lastUpdateTime: number;
        }>;
        rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenStored(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardRate(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;
        solid(overrides?: CallOverrides): Promise<string>;
        stake(overrides?: CallOverrides): Promise<string>;
        tokenIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        userOptIns(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        userOptInsIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userRewardData(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            userRewardPerTokenPaid: BigNumber;
            userEarnedStored: BigNumber;
        }>;
        userRewardPerTokenStored(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        voter(overrides?: CallOverrides): Promise<string>;
        withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawAll(overrides?: CallOverrides): Promise<void>;
        withdrawToken(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ClaimFees(address,uint256,uint256)"(from?: PromiseOrValue<string> | null, claimed0?: null, claimed1?: null): ClaimFeesEventFilter;
        ClaimFees(from?: PromiseOrValue<string> | null, claimed0?: null, claimed1?: null): ClaimFeesEventFilter;
        "ClaimRewards(address,address,uint256)"(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): ClaimRewardsEventFilter;
        ClaimRewards(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): ClaimRewardsEventFilter;
        "ClawbackRewards(address,uint256)"(reward?: PromiseOrValue<string> | null, amount?: null): ClawbackRewardsEventFilter;
        ClawbackRewards(reward?: PromiseOrValue<string> | null, amount?: null): ClawbackRewardsEventFilter;
        "Deposit(address,uint256,uint256)"(from?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): DepositEventFilter;
        Deposit(from?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): DepositEventFilter;
        "NotifyReward(address,address,uint256)"(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): NotifyRewardEventFilter;
        NotifyReward(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): NotifyRewardEventFilter;
        "OptIn(address,address)"(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null): OptInEventFilter;
        OptIn(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null): OptInEventFilter;
        "OptOut(address,address)"(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null): OptOutEventFilter;
        OptOut(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null): OptOutEventFilter;
        "Withdraw(address,uint256,uint256)"(from?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): WithdrawEventFilter;
        Withdraw(from?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): WithdrawEventFilter;
    };
    estimateGas: {
        _ve(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bribe(overrides?: CallOverrides): Promise<BigNumber>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        clawbackRewards(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositAll(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositAndOptIn(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, optInPools: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        derivedBalance(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        derivedBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        derivedSupply(overrides?: CallOverrides): Promise<BigNumber>;
        earned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        emergencyOptOut(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        factoryAddress(overrides?: CallOverrides): Promise<BigNumber>;
        fees0(overrides?: CallOverrides): Promise<BigNumber>;
        fees1(overrides?: CallOverrides): Promise<BigNumber>;
        getReward(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_stake: PromiseOrValue<string>, _bribe: PromiseOrValue<string>, __ve: PromiseOrValue<string>, _voter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isOptIn(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isReward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastTimeRewardApplicable(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdateTime(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        optIn(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        optOut(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        periodFinish(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardData(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenStored(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardRate(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;
        solid(overrides?: CallOverrides): Promise<BigNumber>;
        stake(overrides?: CallOverrides): Promise<BigNumber>;
        tokenIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        userOptIns(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        userOptInsIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userRewardData(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userRewardPerTokenStored(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        voter(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawToken(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bribe(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        clawbackRewards(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositAll(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositAndOptIn(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, optInPools: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        derivedBalance(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        derivedBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        derivedSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        earned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emergencyOptOut(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        factoryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fees0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fees1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReward(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_stake: PromiseOrValue<string>, _bribe: PromiseOrValue<string>, __ve: PromiseOrValue<string>, _voter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isOptIn(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isReward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastTimeRewardApplicable(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUpdateTime(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        optIn(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        optOut(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        periodFinish(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardData(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerTokenStored(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardRate(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsListLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        solid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stake(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userOptIns(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userOptInsIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userRewardData(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userRewardPerTokenStored(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToken(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
