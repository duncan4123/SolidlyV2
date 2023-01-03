import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BaseV2GaugeFactoryInterface, BaseV2GaugeFactoryInterfaceInterface } from "../../mainnet/BaseV2GaugeFactoryInterface";
export declare class BaseV2GaugeFactoryInterface__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "childInterfaceAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "_childInterface";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "childSubImplementationAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "_childSubImplementation";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_pool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_bribe";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_ve";
            readonly type: "address";
        }];
        readonly name: "createGauge";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "lastGauge";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governanceAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "_governanceAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "interfaceSourceAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_childInterfaceAddress";
            readonly type: "address";
        }];
        readonly name: "updateChildInterfaceAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_childSubImplementationAddress";
            readonly type: "address";
        }];
        readonly name: "updateChildSubImplementationAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): BaseV2GaugeFactoryInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseV2GaugeFactoryInterface;
}
