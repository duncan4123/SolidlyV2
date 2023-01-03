import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface BribeV2InterfaceInterface extends utils.Interface {
    functions: {
        "DURATION()": FunctionFragment;
        "_deposit(uint256,uint256)": FunctionFragment;
        "_minter()": FunctionFragment;
        "_ve()": FunctionFragment;
        "_voter()": FunctionFragment;
        "_withdraw(uint256,uint256)": FunctionFragment;
        "balanceOf(uint256)": FunctionFragment;
        "clawbackRewards(address,uint256)": FunctionFragment;
        "earned(address,uint256)": FunctionFragment;
        "factoryAddress()": FunctionFragment;
        "getPeriodReward(uint256,uint256,address[])": FunctionFragment;
        "getReward(uint256,address[])": FunctionFragment;
        "getRewardForOwner(uint256,address[])": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "isReward(address)": FunctionFragment;
        "left(address)": FunctionFragment;
        "notifyRewardAmount(address,uint256)": FunctionFragment;
        "periodBalanceOf(uint256,uint256)": FunctionFragment;
        "periodEarned(uint256,address,uint256)": FunctionFragment;
        "periodIsReward(uint256,address)": FunctionFragment;
        "periodRewardAmount(uint256,address)": FunctionFragment;
        "periodRewardPerToken(uint256,address)": FunctionFragment;
        "periodRewards(uint256,uint256)": FunctionFragment;
        "periodRewardsListLength(uint256)": FunctionFragment;
        "periodTotalSupply(uint256)": FunctionFragment;
        "periodUserRewardClaimed(uint256,uint256,address)": FunctionFragment;
        "rewardPerToken(address)": FunctionFragment;
        "rewards()": FunctionFragment;
        "rewardsListLength()": FunctionFragment;
        "totalSupply()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DURATION" | "_deposit" | "_minter" | "_ve" | "_voter" | "_withdraw" | "balanceOf" | "clawbackRewards" | "earned" | "factoryAddress" | "getPeriodReward" | "getReward" | "getRewardForOwner" | "governanceAddress" | "initialize" | "isReward" | "left" | "notifyRewardAmount" | "periodBalanceOf" | "periodEarned" | "periodIsReward" | "periodRewardAmount" | "periodRewardPerToken" | "periodRewards" | "periodRewardsListLength" | "periodTotalSupply" | "periodUserRewardClaimed" | "rewardPerToken" | "rewards" | "rewardsListLength" | "totalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "DURATION", values?: undefined): string;
    encodeFunctionData(functionFragment: "_deposit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "_minter", values?: undefined): string;
    encodeFunctionData(functionFragment: "_ve", values?: undefined): string;
    encodeFunctionData(functionFragment: "_voter", values?: undefined): string;
    encodeFunctionData(functionFragment: "_withdraw", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "clawbackRewards", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "earned", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "factoryAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPeriodReward", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "getReward", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getRewardForOwner", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isReward", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "left", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "notifyRewardAmount", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "periodBalanceOf", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "periodEarned", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "periodIsReward", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "periodRewardAmount", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "periodRewardPerToken", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "periodRewards", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "periodRewardsListLength", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "periodTotalSupply", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "periodUserRewardClaimed", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "rewardPerToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsListLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DURATION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_minter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_ve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_voter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clawbackRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factoryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPeriodReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardForOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "left", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "notifyRewardAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodEarned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodIsReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodRewardAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodRewardPerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodRewardsListLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodUserRewardClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsListLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    events: {
        "ClaimRewards(address,address,uint256)": EventFragment;
        "Deposit(address,uint256,uint256)": EventFragment;
        "NotifyReward(address,address,uint256)": EventFragment;
        "Withdraw(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NotifyReward"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
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
export interface BribeV2Interface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BribeV2InterfaceInterface;
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
        DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;
        _deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _minter(overrides?: CallOverrides): Promise<[string]>;
        _ve(overrides?: CallOverrides): Promise<[string]>;
        _voter(overrides?: CallOverrides): Promise<[string]>;
        _withdraw(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        clawbackRewards(token: PromiseOrValue<string>, period: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        earned(token: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        factoryAddress(overrides?: CallOverrides): Promise<[string] & {
            _factory: string;
        }>;
        getPeriodReward(timestamp: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getReward(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRewardForOwner(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        initialize(voter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isReward(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        periodBalanceOf(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        periodEarned(timestamp: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        periodIsReward(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        periodRewardAmount(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        periodRewardPerToken(timestamp: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        periodRewards(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        periodRewardsListLength(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        periodTotalSupply(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        periodUserRewardClaimed(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewards(overrides?: CallOverrides): Promise<[string[]]>;
        rewardsListLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DURATION(overrides?: CallOverrides): Promise<BigNumber>;
    _deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _minter(overrides?: CallOverrides): Promise<string>;
    _ve(overrides?: CallOverrides): Promise<string>;
    _voter(overrides?: CallOverrides): Promise<string>;
    _withdraw(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    clawbackRewards(token: PromiseOrValue<string>, period: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    earned(token: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    factoryAddress(overrides?: CallOverrides): Promise<string>;
    getPeriodReward(timestamp: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getReward(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRewardForOwner(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    initialize(voter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isReward(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    periodBalanceOf(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    periodEarned(timestamp: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    periodIsReward(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    periodRewardAmount(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    periodRewardPerToken(timestamp: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    periodRewards(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    periodRewardsListLength(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    periodTotalSupply(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    periodUserRewardClaimed(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    rewards(overrides?: CallOverrides): Promise<string[]>;
    rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        _deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        _minter(overrides?: CallOverrides): Promise<string>;
        _ve(overrides?: CallOverrides): Promise<string>;
        _voter(overrides?: CallOverrides): Promise<string>;
        _withdraw(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        clawbackRewards(token: PromiseOrValue<string>, period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        earned(token: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        factoryAddress(overrides?: CallOverrides): Promise<string>;
        getPeriodReward(timestamp: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        getReward(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        getRewardForOwner(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        initialize(voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isReward(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        periodBalanceOf(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodEarned(timestamp: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodIsReward(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        periodRewardAmount(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        periodRewardPerToken(timestamp: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        periodRewards(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        periodRewardsListLength(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodTotalSupply(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodUserRewardClaimed(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewards(overrides?: CallOverrides): Promise<string[]>;
        rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ClaimRewards(address,address,uint256)"(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): ClaimRewardsEventFilter;
        ClaimRewards(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): ClaimRewardsEventFilter;
        "Deposit(address,uint256,uint256)"(from?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): DepositEventFilter;
        Deposit(from?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): DepositEventFilter;
        "NotifyReward(address,address,uint256)"(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): NotifyRewardEventFilter;
        NotifyReward(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): NotifyRewardEventFilter;
        "Withdraw(address,uint256,uint256)"(from?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): WithdrawEventFilter;
        Withdraw(from?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): WithdrawEventFilter;
    };
    estimateGas: {
        DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        _deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _minter(overrides?: CallOverrides): Promise<BigNumber>;
        _ve(overrides?: CallOverrides): Promise<BigNumber>;
        _voter(overrides?: CallOverrides): Promise<BigNumber>;
        _withdraw(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        clawbackRewards(token: PromiseOrValue<string>, period: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        earned(token: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        factoryAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getPeriodReward(timestamp: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getReward(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRewardForOwner(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(voter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isReward(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        periodBalanceOf(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodEarned(timestamp: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodIsReward(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        periodRewardAmount(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        periodRewardPerToken(timestamp: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        periodRewards(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodRewardsListLength(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodTotalSupply(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodUserRewardClaimed(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewards(overrides?: CallOverrides): Promise<BigNumber>;
        rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _withdraw(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clawbackRewards(token: PromiseOrValue<string>, period: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        earned(token: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factoryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPeriodReward(timestamp: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getReward(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRewardForOwner(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(voter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isReward(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        periodBalanceOf(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodEarned(timestamp: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodIsReward(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodRewardAmount(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodRewardPerToken(timestamp: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodRewards(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodRewardsListLength(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodTotalSupply(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodUserRewardClaimed(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsListLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
