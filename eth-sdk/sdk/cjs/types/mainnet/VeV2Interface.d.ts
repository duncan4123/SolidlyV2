import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface VeV2InterfaceInterface extends utils.Interface {
    functions: {
        "abstain(uint256)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "attach(uint256)": FunctionFragment;
        "attachments(uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balanceOfAtNFT(uint256,uint256)": FunctionFragment;
        "balanceOfNFT(uint256)": FunctionFragment;
        "balanceOfNFTAt(uint256,uint256)": FunctionFragment;
        "block_number()": FunctionFragment;
        "checkpoint()": FunctionFragment;
        "create_lock(uint256,uint256)": FunctionFragment;
        "create_lock_for(uint256,uint256,address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "delegate(address,uint256)": FunctionFragment;
        "deposit_for(uint256,uint256)": FunctionFragment;
        "detach(uint256)": FunctionFragment;
        "epoch()": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "getDelegate(uint256)": FunctionFragment;
        "get_last_user_slope(uint256)": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "increase_amount(uint256,uint256)": FunctionFragment;
        "increase_unlock_time(uint256,uint256)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isApprovedOrOwner(address,uint256)": FunctionFragment;
        "isDelegateForAll(address,address)": FunctionFragment;
        "isDelegateOrOwner(address,uint256)": FunctionFragment;
        "locked(uint256)": FunctionFragment;
        "locked__end(uint256)": FunctionFragment;
        "merge(uint256,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "ownership_change(uint256)": FunctionFragment;
        "point_history(uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setDelegateForAll(address,bool)": FunctionFragment;
        "setVoter(address)": FunctionFragment;
        "slope_changes(uint256)": FunctionFragment;
        "split(uint256,uint256)": FunctionFragment;
        "supply()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "token()": FunctionFragment;
        "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "totalSupplyAt(uint256)": FunctionFragment;
        "totalSupplyAtT(uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "user_point_epoch(uint256)": FunctionFragment;
        "user_point_history(uint256,uint256)": FunctionFragment;
        "user_point_history__ts(uint256,uint256)": FunctionFragment;
        "version()": FunctionFragment;
        "voted(uint256)": FunctionFragment;
        "voter()": FunctionFragment;
        "voting(uint256)": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "abstain" | "approve" | "attach" | "attachments" | "balanceOf" | "balanceOfAtNFT" | "balanceOfNFT" | "balanceOfNFTAt" | "block_number" | "checkpoint" | "create_lock" | "create_lock_for" | "decimals" | "delegate" | "deposit_for" | "detach" | "epoch" | "getApproved" | "getDelegate" | "get_last_user_slope" | "governanceAddress" | "increase_amount" | "increase_unlock_time" | "initialize" | "isApprovedForAll" | "isApprovedOrOwner" | "isDelegateForAll" | "isDelegateOrOwner" | "locked" | "locked__end" | "merge" | "name" | "ownerOf" | "ownership_change" | "point_history" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setDelegateForAll" | "setVoter" | "slope_changes" | "split" | "supply" | "supportsInterface" | "symbol" | "token" | "tokenOfOwnerByIndex" | "tokenURI" | "totalSupply" | "totalSupplyAt" | "totalSupplyAtT" | "transferFrom" | "user_point_epoch" | "user_point_history" | "user_point_history__ts" | "version" | "voted" | "voter" | "voting" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "abstain", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "attach", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "attachments", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfAtNFT", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOfNFT", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOfNFTAt", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "block_number", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "create_lock", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "create_lock_for", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegate", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "deposit_for", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "detach", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "getApproved", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getDelegate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "get_last_user_slope", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "increase_amount", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increase_unlock_time", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isApprovedOrOwner", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isDelegateForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isDelegateOrOwner", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "locked", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "locked__end", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "merge", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "ownership_change", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "point_history", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setDelegateForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setVoter", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "slope_changes", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "split", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "supply", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenOfOwnerByIndex", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupplyAt", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalSupplyAtT", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "user_point_epoch", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "user_point_history", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "user_point_history__ts", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "voted", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "voter", values?: undefined): string;
    encodeFunctionData(functionFragment: "voting", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "abstain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "attach", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "attachments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAtNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfNFTAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "block_number", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "create_lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "create_lock_for", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit_for", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "detach", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_last_user_slope", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increase_amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increase_unlock_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedOrOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDelegateForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDelegateOrOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "locked__end", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "merge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownership_change", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "point_history", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelegateForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVoter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slope_changes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "split", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenOfOwnerByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupplyAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupplyAtT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user_point_epoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user_point_history", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user_point_history__ts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "Delegate(address,address,uint256)": EventFragment;
        "DelegateForAll(address,address,bool)": EventFragment;
        "Deposit(address,uint256,uint256,uint256,uint8,uint256)": EventFragment;
        "Supply(uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Withdraw(address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Delegate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Supply"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface DelegateEventObject {
    owner: string;
    delegate: string;
    tokenId: BigNumber;
}
export type DelegateEvent = TypedEvent<[
    string,
    string,
    BigNumber
], DelegateEventObject>;
export type DelegateEventFilter = TypedEventFilter<DelegateEvent>;
export interface DelegateForAllEventObject {
    owner: string;
    delegate: string;
    approved: boolean;
}
export type DelegateForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], DelegateForAllEventObject>;
export type DelegateForAllEventFilter = TypedEventFilter<DelegateForAllEvent>;
export interface DepositEventObject {
    provider: string;
    tokenId: BigNumber;
    value: BigNumber;
    locktime: BigNumber;
    deposit_type: number;
    ts: BigNumber;
}
export type DepositEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    BigNumber
], DepositEventObject>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
export interface SupplyEventObject {
    prevSupply: BigNumber;
    supply: BigNumber;
}
export type SupplyEvent = TypedEvent<[BigNumber, BigNumber], SupplyEventObject>;
export type SupplyEventFilter = TypedEventFilter<SupplyEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface WithdrawEventObject {
    provider: string;
    tokenId: BigNumber;
    value: BigNumber;
    ts: BigNumber;
}
export type WithdrawEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface VeV2Interface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VeV2InterfaceInterface;
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
        abstain(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approve(_approved: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        attach(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        attachments(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfAtNFT(_tokenId: PromiseOrValue<BigNumberish>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfNFT(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfNFTAt(_tokenId: PromiseOrValue<BigNumberish>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        block_number(overrides?: CallOverrides): Promise<[BigNumber]>;
        checkpoint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        create_lock(_value: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        create_lock_for(_value: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        delegate(_delegate: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposit_for(_tokenId: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        detach(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        epoch(overrides?: CallOverrides): Promise<[BigNumber]>;
        getApproved(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getDelegate(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        get_last_user_slope(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        increase_amount(_tokenId: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increase_unlock_time(_tokenId: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(token_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isApprovedForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isApprovedOrOwner(_spender: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        isDelegateForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isDelegateOrOwner(_voter: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        locked(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            amount: BigNumber;
            end: BigNumber;
        }>;
        locked__end(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        merge(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        ownership_change(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        "safeTransferFrom(address,address,uint256)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(_operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDelegateForAll(_delegate: PromiseOrValue<string>, _status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVoter(_voter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        split(_from: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supply(overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(_interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        tokenOfOwnerByIndex(_owner: PromiseOrValue<string>, _tokenIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        user_point_epoch(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        user_point_history(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        user_point_history__ts(_tokenId: PromiseOrValue<BigNumberish>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        version(overrides?: CallOverrides): Promise<[string]>;
        voted(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        voter(overrides?: CallOverrides): Promise<[string]>;
        voting(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    abstain(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approve(_approved: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    attach(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    attachments(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfAtNFT(_tokenId: PromiseOrValue<BigNumberish>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfNFT(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfNFTAt(_tokenId: PromiseOrValue<BigNumberish>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    block_number(overrides?: CallOverrides): Promise<BigNumber>;
    checkpoint(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    create_lock(_value: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    create_lock_for(_value: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    delegate(_delegate: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposit_for(_tokenId: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    detach(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    epoch(overrides?: CallOverrides): Promise<BigNumber>;
    getApproved(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getDelegate(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    get_last_user_slope(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    increase_amount(_tokenId: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increase_unlock_time(_tokenId: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(token_addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isApprovedForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isApprovedOrOwner(_spender: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    isDelegateForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isDelegateOrOwner(_voter: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    locked(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        amount: BigNumber;
        end: BigNumber;
    }>;
    locked__end(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    merge(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    ownerOf(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    ownership_change(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
    }>;
    "safeTransferFrom(address,address,uint256)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(_operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDelegateForAll(_delegate: PromiseOrValue<string>, _status: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVoter(_voter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    split(_from: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supply(overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(_interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    tokenOfOwnerByIndex(_owner: PromiseOrValue<string>, _tokenIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    user_point_epoch(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    user_point_history(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
    }>;
    user_point_history__ts(_tokenId: PromiseOrValue<BigNumberish>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    version(overrides?: CallOverrides): Promise<string>;
    voted(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    voter(overrides?: CallOverrides): Promise<string>;
    voting(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        abstain(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        approve(_approved: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        attach(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        attachments(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAtNFT(_tokenId: PromiseOrValue<BigNumberish>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfNFT(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfNFTAt(_tokenId: PromiseOrValue<BigNumberish>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        block_number(overrides?: CallOverrides): Promise<BigNumber>;
        checkpoint(overrides?: CallOverrides): Promise<void>;
        create_lock(_value: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        create_lock_for(_value: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        delegate(_delegate: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        deposit_for(_tokenId: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        detach(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        epoch(overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getDelegate(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        get_last_user_slope(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        increase_amount(_tokenId: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        increase_unlock_time(_tokenId: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        initialize(token_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isApprovedForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isApprovedOrOwner(_spender: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isDelegateForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isDelegateOrOwner(_voter: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        locked(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            amount: BigNumber;
            end: BigNumber;
        }>;
        locked__end(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        merge(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        ownerOf(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        ownership_change(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        "safeTransferFrom(address,address,uint256)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(_operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setDelegateForAll(_delegate: PromiseOrValue<string>, _status: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setVoter(_voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        split(_from: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        supply(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(_interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
        tokenOfOwnerByIndex(_owner: PromiseOrValue<string>, _tokenIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        user_point_epoch(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        user_point_history(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        user_point_history__ts(_tokenId: PromiseOrValue<BigNumberish>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<string>;
        voted(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        voter(overrides?: CallOverrides): Promise<string>;
        voting(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdraw(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        "Delegate(address,address,uint256)"(owner?: PromiseOrValue<string> | null, delegate?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): DelegateEventFilter;
        Delegate(owner?: PromiseOrValue<string> | null, delegate?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): DelegateEventFilter;
        "DelegateForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, delegate?: PromiseOrValue<string> | null, approved?: null): DelegateForAllEventFilter;
        DelegateForAll(owner?: PromiseOrValue<string> | null, delegate?: PromiseOrValue<string> | null, approved?: null): DelegateForAllEventFilter;
        "Deposit(address,uint256,uint256,uint256,uint8,uint256)"(provider?: PromiseOrValue<string> | null, tokenId?: null, value?: null, locktime?: PromiseOrValue<BigNumberish> | null, deposit_type?: null, ts?: null): DepositEventFilter;
        Deposit(provider?: PromiseOrValue<string> | null, tokenId?: null, value?: null, locktime?: PromiseOrValue<BigNumberish> | null, deposit_type?: null, ts?: null): DepositEventFilter;
        "Supply(uint256,uint256)"(prevSupply?: null, supply?: null): SupplyEventFilter;
        Supply(prevSupply?: null, supply?: null): SupplyEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        "Withdraw(address,uint256,uint256,uint256)"(provider?: PromiseOrValue<string> | null, tokenId?: null, value?: null, ts?: null): WithdrawEventFilter;
        Withdraw(provider?: PromiseOrValue<string> | null, tokenId?: null, value?: null, ts?: null): WithdrawEventFilter;
    };
    estimateGas: {
        abstain(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approve(_approved: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        attach(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        attachments(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAtNFT(_tokenId: PromiseOrValue<BigNumberish>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfNFT(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfNFTAt(_tokenId: PromiseOrValue<BigNumberish>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        block_number(overrides?: CallOverrides): Promise<BigNumber>;
        checkpoint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        create_lock(_value: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        create_lock_for(_value: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        delegate(_delegate: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposit_for(_tokenId: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        detach(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        epoch(overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDelegate(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        get_last_user_slope(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        increase_amount(_tokenId: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increase_unlock_time(_tokenId: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(token_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isApprovedForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedOrOwner(_spender: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isDelegateForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isDelegateOrOwner(_voter: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        locked(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        locked__end(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        merge(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        ownership_change(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(_operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDelegateForAll(_delegate: PromiseOrValue<string>, _status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVoter(_voter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        split(_from: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supply(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(_interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(_owner: PromiseOrValue<string>, _tokenIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        user_point_epoch(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        user_point_history(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        user_point_history__ts(_tokenId: PromiseOrValue<BigNumberish>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        voted(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        voter(overrides?: CallOverrides): Promise<BigNumber>;
        voting(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        abstain(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approve(_approved: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        attach(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        attachments(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAtNFT(_tokenId: PromiseOrValue<BigNumberish>, _block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfNFT(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfNFTAt(_tokenId: PromiseOrValue<BigNumberish>, _t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        block_number(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkpoint(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        create_lock(_value: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        create_lock_for(_value: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegate(_delegate: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposit_for(_tokenId: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        detach(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDelegate(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_last_user_slope(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increase_amount(_tokenId: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increase_unlock_time(_tokenId: PromiseOrValue<BigNumberish>, _lock_duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(token_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isApprovedForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedOrOwner(_spender: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isDelegateForAll(_owner: PromiseOrValue<string>, _operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isDelegateOrOwner(_voter: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        locked(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        locked__end(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        merge(_from: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownership_change(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(_operator: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDelegateForAll(_delegate: PromiseOrValue<string>, _status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVoter(_voter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        split(_from: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(_interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOfOwnerByIndex(_owner: PromiseOrValue<string>, _tokenIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupplyAtT(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        user_point_epoch(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        user_point_history(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        user_point_history__ts(_tokenId: PromiseOrValue<BigNumberish>, _idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voted(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voting(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
