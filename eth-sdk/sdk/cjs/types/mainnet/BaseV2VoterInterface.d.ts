import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface BaseV2VoterInterfaceInterface extends utils.Interface {
    functions: {
        "_ve()": FunctionFragment;
        "activePeriod()": FunctionFragment;
        "attachTokenToGauge(uint256,address)": FunctionFragment;
        "bribeFactory()": FunctionFragment;
        "bribes(address)": FunctionFragment;
        "claimBribes(address[],address[][],uint256)": FunctionFragment;
        "claimFees(address[],address[][],uint256)": FunctionFragment;
        "claimRewards(address[],address[][])": FunctionFragment;
        "claimable(address)": FunctionFragment;
        "createGauge(address)": FunctionFragment;
        "detachTokenFromGauge(uint256,address)": FunctionFragment;
        "distribute(address[])": FunctionFragment;
        "distribute(address)": FunctionFragment;
        "distribute(uint256,uint256)": FunctionFragment;
        "distribute()": FunctionFragment;
        "distribute(address,uint256)": FunctionFragment;
        "distributeFees(address[])": FunctionFragment;
        "distro()": FunctionFragment;
        "emitDeposit(uint256,address,uint256)": FunctionFragment;
        "emitWithdraw(uint256,address,uint256)": FunctionFragment;
        "factory()": FunctionFragment;
        "gaugeFactory()": FunctionFragment;
        "gauges(address)": FunctionFragment;
        "generalFees()": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "governanceBlacklist(address[])": FunctionFragment;
        "governanceWhitelist(address[])": FunctionFragment;
        "initialize(address,address,address,address,address,address)": FunctionFragment;
        "isGauge(address)": FunctionFragment;
        "isWhitelisted(address)": FunctionFragment;
        "length()": FunctionFragment;
        "listingFeeRatio()": FunctionFragment;
        "listing_fee()": FunctionFragment;
        "minter()": FunctionFragment;
        "notifyRewardAmount(uint256)": FunctionFragment;
        "periodPoolVote(uint256,uint256,uint256)": FunctionFragment;
        "periodTotalWeight(uint256)": FunctionFragment;
        "periodUpdated(address,uint256)": FunctionFragment;
        "periodUsedWeights(uint256,uint256)": FunctionFragment;
        "periodVotes(uint256,uint256,address)": FunctionFragment;
        "periodWeights(address,uint256)": FunctionFragment;
        "poolForGauge(address)": FunctionFragment;
        "poolVote(uint256)": FunctionFragment;
        "poolVote(uint256,uint256)": FunctionFragment;
        "pools(uint256)": FunctionFragment;
        "reset(uint256)": FunctionFragment;
        "rewards(uint256)": FunctionFragment;
        "setListingFeeRatio(uint256)": FunctionFragment;
        "setTrainingWheels(bool)": FunctionFragment;
        "syncActivePeriod()": FunctionFragment;
        "totalWeight()": FunctionFragment;
        "trainingWheels()": FunctionFragment;
        "updateAll()": FunctionFragment;
        "updateFor(address[])": FunctionFragment;
        "updateForRange(uint256,uint256)": FunctionFragment;
        "updateGauge(address)": FunctionFragment;
        "updateGauge(address,uint256)": FunctionFragment;
        "usedWeights(uint256)": FunctionFragment;
        "vote(uint256,address[],int256[])": FunctionFragment;
        "votes(uint256,address)": FunctionFragment;
        "weights(address)": FunctionFragment;
        "whitelist(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_ve" | "activePeriod" | "attachTokenToGauge" | "bribeFactory" | "bribes" | "claimBribes" | "claimFees" | "claimRewards" | "claimable" | "createGauge" | "detachTokenFromGauge" | "distribute(address[])" | "distribute(address)" | "distribute(uint256,uint256)" | "distribute()" | "distribute(address,uint256)" | "distributeFees" | "distro" | "emitDeposit" | "emitWithdraw" | "factory" | "gaugeFactory" | "gauges" | "generalFees" | "governanceAddress" | "governanceBlacklist" | "governanceWhitelist" | "initialize" | "isGauge" | "isWhitelisted" | "length" | "listingFeeRatio" | "listing_fee" | "minter" | "notifyRewardAmount" | "periodPoolVote" | "periodTotalWeight" | "periodUpdated" | "periodUsedWeights" | "periodVotes" | "periodWeights" | "poolForGauge" | "poolVote(uint256)" | "poolVote(uint256,uint256)" | "pools" | "reset" | "rewards" | "setListingFeeRatio" | "setTrainingWheels" | "syncActivePeriod" | "totalWeight" | "trainingWheels" | "updateAll" | "updateFor" | "updateForRange" | "updateGauge(address)" | "updateGauge(address,uint256)" | "usedWeights" | "vote" | "votes" | "weights" | "whitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "_ve", values?: undefined): string;
    encodeFunctionData(functionFragment: "activePeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "attachTokenToGauge", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bribeFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "bribes", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimBribes", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<string>[][],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "claimFees", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<string>[][],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [PromiseOrValue<string>[], PromiseOrValue<string>[][]]): string;
    encodeFunctionData(functionFragment: "claimable", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "createGauge", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "detachTokenFromGauge", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "distribute(address[])", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "distribute(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "distribute(uint256,uint256)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "distribute()", values?: undefined): string;
    encodeFunctionData(functionFragment: "distribute(address,uint256)", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "distributeFees", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "distro", values?: undefined): string;
    encodeFunctionData(functionFragment: "emitDeposit", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "emitWithdraw", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaugeFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "gauges", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "generalFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "governanceBlacklist", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "governanceWhitelist", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isGauge", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isWhitelisted", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "length", values?: undefined): string;
    encodeFunctionData(functionFragment: "listingFeeRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "listing_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "minter", values?: undefined): string;
    encodeFunctionData(functionFragment: "notifyRewardAmount", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "periodPoolVote", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "periodTotalWeight", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "periodUpdated", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "periodUsedWeights", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "periodVotes", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "periodWeights", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "poolForGauge", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "poolVote(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "poolVote(uint256,uint256)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pools", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "reset", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rewards", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setListingFeeRatio", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTrainingWheels", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "syncActivePeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalWeight", values?: undefined): string;
    encodeFunctionData(functionFragment: "trainingWheels", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateFor", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "updateForRange", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateGauge(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateGauge(address,uint256)", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "usedWeights", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "vote", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "votes", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "weights", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "whitelist", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "_ve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "activePeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "attachTokenToGauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bribeFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bribes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimBribes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "detachTokenFromGauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute(address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributeFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distro", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaugeFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gauges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generalFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "listingFeeRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "listing_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "notifyRewardAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodPoolVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodTotalWeight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodUsedWeights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodWeights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolForGauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolVote(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolVote(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setListingFeeRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrainingWheels", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "syncActivePeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalWeight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trainingWheels", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateForRange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGauge(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGauge(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usedWeights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
    events: {
        "Abstained(uint256,address,int256)": EventFragment;
        "Attach(address,address,uint256)": EventFragment;
        "Deposit(address,address,uint256,uint256)": EventFragment;
        "Detach(address,address,uint256)": EventFragment;
        "DistributeReward(address,address,uint256)": EventFragment;
        "GaugeCreated(address,address,address,address)": EventFragment;
        "NotifyReward(address,address,uint256)": EventFragment;
        "Voted(address,uint256,address,int256)": EventFragment;
        "Whitelisted(address,address)": EventFragment;
        "Withdraw(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Abstained"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Attach"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Detach"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DistributeReward"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GaugeCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NotifyReward"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Voted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Whitelisted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface AbstainedEventObject {
    tokenId: BigNumber;
    pool: string;
    weight: BigNumber;
}
export type AbstainedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], AbstainedEventObject>;
export type AbstainedEventFilter = TypedEventFilter<AbstainedEvent>;
export interface AttachEventObject {
    owner: string;
    gauge: string;
    tokenId: BigNumber;
}
export type AttachEvent = TypedEvent<[
    string,
    string,
    BigNumber
], AttachEventObject>;
export type AttachEventFilter = TypedEventFilter<AttachEvent>;
export interface DepositEventObject {
    lp: string;
    gauge: string;
    tokenId: BigNumber;
    amount: BigNumber;
}
export type DepositEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], DepositEventObject>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
export interface DetachEventObject {
    owner: string;
    gauge: string;
    tokenId: BigNumber;
}
export type DetachEvent = TypedEvent<[
    string,
    string,
    BigNumber
], DetachEventObject>;
export type DetachEventFilter = TypedEventFilter<DetachEvent>;
export interface DistributeRewardEventObject {
    sender: string;
    gauge: string;
    amount: BigNumber;
}
export type DistributeRewardEvent = TypedEvent<[
    string,
    string,
    BigNumber
], DistributeRewardEventObject>;
export type DistributeRewardEventFilter = TypedEventFilter<DistributeRewardEvent>;
export interface GaugeCreatedEventObject {
    gauge: string;
    creator: string;
    bribe: string;
    pool: string;
}
export type GaugeCreatedEvent = TypedEvent<[
    string,
    string,
    string,
    string
], GaugeCreatedEventObject>;
export type GaugeCreatedEventFilter = TypedEventFilter<GaugeCreatedEvent>;
export interface NotifyRewardEventObject {
    sender: string;
    reward: string;
    amount: BigNumber;
}
export type NotifyRewardEvent = TypedEvent<[
    string,
    string,
    BigNumber
], NotifyRewardEventObject>;
export type NotifyRewardEventFilter = TypedEventFilter<NotifyRewardEvent>;
export interface VotedEventObject {
    voter: string;
    tokenId: BigNumber;
    pool: string;
    weight: BigNumber;
}
export type VotedEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], VotedEventObject>;
export type VotedEventFilter = TypedEventFilter<VotedEvent>;
export interface WhitelistedEventObject {
    whitelister: string;
    token: string;
}
export type WhitelistedEvent = TypedEvent<[
    string,
    string
], WhitelistedEventObject>;
export type WhitelistedEventFilter = TypedEventFilter<WhitelistedEvent>;
export interface WithdrawEventObject {
    lp: string;
    gauge: string;
    tokenId: BigNumber;
    amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface BaseV2VoterInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseV2VoterInterfaceInterface;
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
        activePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        attachTokenToGauge(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bribeFactory(overrides?: CallOverrides): Promise<[string]>;
        bribes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        claimBribes(_bribes: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimFees(_fees: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimRewards(_gauges: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimable(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        createGauge(_pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        detachTokenFromGauge(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "distribute(address[])"(_gauges: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "distribute(address)"(_gauge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "distribute(uint256,uint256)"(start: PromiseOrValue<BigNumberish>, finish: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "distribute()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "distribute(address,uint256)"(_gauge: PromiseOrValue<string>, _activePeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        distributeFees(_gauges: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        distro(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitDeposit(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitWithdraw(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        gaugeFactory(overrides?: CallOverrides): Promise<[string]>;
        gauges(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        generalFees(overrides?: CallOverrides): Promise<[string]>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        governanceBlacklist(_tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        governanceWhitelist(_tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(__ve: PromiseOrValue<string>, _factory: PromiseOrValue<string>, _gauges: PromiseOrValue<string>, _bribes: PromiseOrValue<string>, _generalFees: PromiseOrValue<string>, _minter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isWhitelisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        length(overrides?: CallOverrides): Promise<[BigNumber]>;
        listingFeeRatio(overrides?: CallOverrides): Promise<[BigNumber]>;
        listing_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        minter(overrides?: CallOverrides): Promise<[string]>;
        notifyRewardAmount(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        periodPoolVote(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        periodTotalWeight(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        periodUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        periodUsedWeights(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        periodVotes(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        periodWeights(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        poolForGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        "poolVote(uint256)"(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;
        "poolVote(uint256,uint256)"(tokenId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        pools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        reset(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        setListingFeeRatio(_listingFeeRatio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrainingWheels(_status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        syncActivePeriod(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalWeight(overrides?: CallOverrides): Promise<[BigNumber]>;
        trainingWheels(overrides?: CallOverrides): Promise<[boolean]>;
        updateAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFor(_gauges: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateForRange(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "updateGauge(address)"(_gauge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "updateGauge(address,uint256)"(_gauge: PromiseOrValue<string>, _activePeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        usedWeights(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        vote(tokenId: PromiseOrValue<BigNumberish>, _poolVote: PromiseOrValue<string>[], _weights: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        votes(tokenId: PromiseOrValue<BigNumberish>, pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        weights(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        whitelist(_token: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _ve(overrides?: CallOverrides): Promise<string>;
    activePeriod(overrides?: CallOverrides): Promise<BigNumber>;
    attachTokenToGauge(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bribeFactory(overrides?: CallOverrides): Promise<string>;
    bribes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    claimBribes(_bribes: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimFees(_fees: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimRewards(_gauges: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimable(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    createGauge(_pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    detachTokenFromGauge(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "distribute(address[])"(_gauges: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "distribute(address)"(_gauge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "distribute(uint256,uint256)"(start: PromiseOrValue<BigNumberish>, finish: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "distribute()"(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "distribute(address,uint256)"(_gauge: PromiseOrValue<string>, _activePeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    distributeFees(_gauges: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    distro(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitDeposit(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitWithdraw(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    gaugeFactory(overrides?: CallOverrides): Promise<string>;
    gauges(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    generalFees(overrides?: CallOverrides): Promise<string>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    governanceBlacklist(_tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    governanceWhitelist(_tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(__ve: PromiseOrValue<string>, _factory: PromiseOrValue<string>, _gauges: PromiseOrValue<string>, _bribes: PromiseOrValue<string>, _generalFees: PromiseOrValue<string>, _minter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isWhitelisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    length(overrides?: CallOverrides): Promise<BigNumber>;
    listingFeeRatio(overrides?: CallOverrides): Promise<BigNumber>;
    listing_fee(overrides?: CallOverrides): Promise<BigNumber>;
    minter(overrides?: CallOverrides): Promise<string>;
    notifyRewardAmount(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    periodPoolVote(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    periodTotalWeight(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    periodUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    periodUsedWeights(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    periodVotes(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    periodWeights(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    poolForGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    "poolVote(uint256)"(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    "poolVote(uint256,uint256)"(tokenId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    pools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    reset(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    setListingFeeRatio(_listingFeeRatio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrainingWheels(_status: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    syncActivePeriod(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalWeight(overrides?: CallOverrides): Promise<BigNumber>;
    trainingWheels(overrides?: CallOverrides): Promise<boolean>;
    updateAll(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFor(_gauges: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateForRange(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "updateGauge(address)"(_gauge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "updateGauge(address,uint256)"(_gauge: PromiseOrValue<string>, _activePeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    usedWeights(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    vote(tokenId: PromiseOrValue<BigNumberish>, _poolVote: PromiseOrValue<string>[], _weights: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    votes(tokenId: PromiseOrValue<BigNumberish>, pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    weights(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    whitelist(_token: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _ve(overrides?: CallOverrides): Promise<string>;
        activePeriod(overrides?: CallOverrides): Promise<BigNumber>;
        attachTokenToGauge(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        bribeFactory(overrides?: CallOverrides): Promise<string>;
        bribes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        claimBribes(_bribes: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claimFees(_fees: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claimRewards(_gauges: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], overrides?: CallOverrides): Promise<void>;
        claimable(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        createGauge(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        detachTokenFromGauge(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "distribute(address[])"(_gauges: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        "distribute(address)"(_gauge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "distribute(uint256,uint256)"(start: PromiseOrValue<BigNumberish>, finish: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "distribute()"(overrides?: CallOverrides): Promise<void>;
        "distribute(address,uint256)"(_gauge: PromiseOrValue<string>, _activePeriod: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        distributeFees(_gauges: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        distro(overrides?: CallOverrides): Promise<void>;
        emitDeposit(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        emitWithdraw(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        factory(overrides?: CallOverrides): Promise<string>;
        gaugeFactory(overrides?: CallOverrides): Promise<string>;
        gauges(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        generalFees(overrides?: CallOverrides): Promise<string>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        governanceBlacklist(_tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        governanceWhitelist(_tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        initialize(__ve: PromiseOrValue<string>, _factory: PromiseOrValue<string>, _gauges: PromiseOrValue<string>, _bribes: PromiseOrValue<string>, _generalFees: PromiseOrValue<string>, _minter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isWhitelisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        length(overrides?: CallOverrides): Promise<BigNumber>;
        listingFeeRatio(overrides?: CallOverrides): Promise<BigNumber>;
        listing_fee(overrides?: CallOverrides): Promise<BigNumber>;
        minter(overrides?: CallOverrides): Promise<string>;
        notifyRewardAmount(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        periodPoolVote(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        periodTotalWeight(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        periodUsedWeights(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodVotes(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        periodWeights(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        poolForGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "poolVote(uint256)"(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        "poolVote(uint256,uint256)"(tokenId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        pools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        reset(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setListingFeeRatio(_listingFeeRatio: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTrainingWheels(_status: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        syncActivePeriod(overrides?: CallOverrides): Promise<BigNumber>;
        totalWeight(overrides?: CallOverrides): Promise<BigNumber>;
        trainingWheels(overrides?: CallOverrides): Promise<boolean>;
        updateAll(overrides?: CallOverrides): Promise<void>;
        updateFor(_gauges: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        updateForRange(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "updateGauge(address)"(_gauge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "updateGauge(address,uint256)"(_gauge: PromiseOrValue<string>, _activePeriod: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        usedWeights(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        vote(tokenId: PromiseOrValue<BigNumberish>, _poolVote: PromiseOrValue<string>[], _weights: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        votes(tokenId: PromiseOrValue<BigNumberish>, pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        weights(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        whitelist(_token: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Abstained(uint256,address,int256)"(tokenId?: PromiseOrValue<BigNumberish> | null, pool?: PromiseOrValue<string> | null, weight?: null): AbstainedEventFilter;
        Abstained(tokenId?: PromiseOrValue<BigNumberish> | null, pool?: PromiseOrValue<string> | null, weight?: null): AbstainedEventFilter;
        "Attach(address,address,uint256)"(owner?: PromiseOrValue<string> | null, gauge?: PromiseOrValue<string> | null, tokenId?: null): AttachEventFilter;
        Attach(owner?: PromiseOrValue<string> | null, gauge?: PromiseOrValue<string> | null, tokenId?: null): AttachEventFilter;
        "Deposit(address,address,uint256,uint256)"(lp?: PromiseOrValue<string> | null, gauge?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): DepositEventFilter;
        Deposit(lp?: PromiseOrValue<string> | null, gauge?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): DepositEventFilter;
        "Detach(address,address,uint256)"(owner?: PromiseOrValue<string> | null, gauge?: PromiseOrValue<string> | null, tokenId?: null): DetachEventFilter;
        Detach(owner?: PromiseOrValue<string> | null, gauge?: PromiseOrValue<string> | null, tokenId?: null): DetachEventFilter;
        "DistributeReward(address,address,uint256)"(sender?: PromiseOrValue<string> | null, gauge?: PromiseOrValue<string> | null, amount?: null): DistributeRewardEventFilter;
        DistributeReward(sender?: PromiseOrValue<string> | null, gauge?: PromiseOrValue<string> | null, amount?: null): DistributeRewardEventFilter;
        "GaugeCreated(address,address,address,address)"(gauge?: PromiseOrValue<string> | null, creator?: null, bribe?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null): GaugeCreatedEventFilter;
        GaugeCreated(gauge?: PromiseOrValue<string> | null, creator?: null, bribe?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null): GaugeCreatedEventFilter;
        "NotifyReward(address,address,uint256)"(sender?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): NotifyRewardEventFilter;
        NotifyReward(sender?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): NotifyRewardEventFilter;
        "Voted(address,uint256,address,int256)"(voter?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, pool?: PromiseOrValue<string> | null, weight?: null): VotedEventFilter;
        Voted(voter?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, pool?: PromiseOrValue<string> | null, weight?: null): VotedEventFilter;
        "Whitelisted(address,address)"(whitelister?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null): WhitelistedEventFilter;
        Whitelisted(whitelister?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null): WhitelistedEventFilter;
        "Withdraw(address,address,uint256,uint256)"(lp?: PromiseOrValue<string> | null, gauge?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): WithdrawEventFilter;
        Withdraw(lp?: PromiseOrValue<string> | null, gauge?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): WithdrawEventFilter;
    };
    estimateGas: {
        _ve(overrides?: CallOverrides): Promise<BigNumber>;
        activePeriod(overrides?: CallOverrides): Promise<BigNumber>;
        attachTokenToGauge(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bribeFactory(overrides?: CallOverrides): Promise<BigNumber>;
        bribes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claimBribes(_bribes: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimFees(_fees: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimRewards(_gauges: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimable(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        createGauge(_pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        detachTokenFromGauge(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "distribute(address[])"(_gauges: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "distribute(address)"(_gauge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "distribute(uint256,uint256)"(start: PromiseOrValue<BigNumberish>, finish: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "distribute()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "distribute(address,uint256)"(_gauge: PromiseOrValue<string>, _activePeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        distributeFees(_gauges: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        distro(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitDeposit(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitWithdraw(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        gaugeFactory(overrides?: CallOverrides): Promise<BigNumber>;
        gauges(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        generalFees(overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        governanceBlacklist(_tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        governanceWhitelist(_tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(__ve: PromiseOrValue<string>, _factory: PromiseOrValue<string>, _gauges: PromiseOrValue<string>, _bribes: PromiseOrValue<string>, _generalFees: PromiseOrValue<string>, _minter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isWhitelisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        length(overrides?: CallOverrides): Promise<BigNumber>;
        listingFeeRatio(overrides?: CallOverrides): Promise<BigNumber>;
        listing_fee(overrides?: CallOverrides): Promise<BigNumber>;
        minter(overrides?: CallOverrides): Promise<BigNumber>;
        notifyRewardAmount(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        periodPoolVote(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodTotalWeight(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodUsedWeights(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        periodVotes(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        periodWeights(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        poolForGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "poolVote(uint256)"(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "poolVote(uint256,uint256)"(tokenId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        reset(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setListingFeeRatio(_listingFeeRatio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrainingWheels(_status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        syncActivePeriod(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalWeight(overrides?: CallOverrides): Promise<BigNumber>;
        trainingWheels(overrides?: CallOverrides): Promise<BigNumber>;
        updateAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFor(_gauges: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateForRange(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "updateGauge(address)"(_gauge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "updateGauge(address,uint256)"(_gauge: PromiseOrValue<string>, _activePeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        usedWeights(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        vote(tokenId: PromiseOrValue<BigNumberish>, _poolVote: PromiseOrValue<string>[], _weights: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        votes(tokenId: PromiseOrValue<BigNumberish>, pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        weights(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        whitelist(_token: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        activePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        attachTokenToGauge(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bribeFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bribes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimBribes(_bribes: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimFees(_fees: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimRewards(_gauges: PromiseOrValue<string>[], _tokens: PromiseOrValue<string>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimable(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createGauge(_pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        detachTokenFromGauge(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "distribute(address[])"(_gauges: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "distribute(address)"(_gauge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "distribute(uint256,uint256)"(start: PromiseOrValue<BigNumberish>, finish: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "distribute()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "distribute(address,uint256)"(_gauge: PromiseOrValue<string>, _activePeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        distributeFees(_gauges: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        distro(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitDeposit(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitWithdraw(tokenId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaugeFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gauges(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generalFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceBlacklist(_tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        governanceWhitelist(_tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(__ve: PromiseOrValue<string>, _factory: PromiseOrValue<string>, _gauges: PromiseOrValue<string>, _bribes: PromiseOrValue<string>, _generalFees: PromiseOrValue<string>, _minter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isWhitelisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        length(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        listingFeeRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        listing_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        notifyRewardAmount(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        periodPoolVote(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodTotalWeight(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodUsedWeights(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodVotes(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodWeights(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolForGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "poolVote(uint256)"(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "poolVote(uint256,uint256)"(tokenId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reset(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setListingFeeRatio(_listingFeeRatio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrainingWheels(_status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        syncActivePeriod(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalWeight(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        trainingWheels(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFor(_gauges: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateForRange(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "updateGauge(address)"(_gauge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "updateGauge(address,uint256)"(_gauge: PromiseOrValue<string>, _activePeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        usedWeights(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vote(tokenId: PromiseOrValue<BigNumberish>, _poolVote: PromiseOrValue<string>[], _weights: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        votes(tokenId: PromiseOrValue<BigNumberish>, pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weights(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelist(_token: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
