import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SolidlyLens, SolidlyLensInterface } from "../../mainnet/SolidlyLens";
export declare class SolidlyLens__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "poolAddress";
            readonly type: "address";
        }];
        readonly name: "bribeAddresByPoolAddress";
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
            readonly name: "bribeAddress";
            readonly type: "address";
        }];
        readonly name: "bribeTokensAddressesByBribeAddress";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "poolAddress";
            readonly type: "address";
        }];
        readonly name: "bribeTokensAddressesByPoolAddress";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "bribesAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "accountAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "poolAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "bribesPositionsOf";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "bribeTokenAddress";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "earned";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISolidlyLens.PositionBribe[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "accountAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "poolAddress";
            readonly type: "address";
        }];
        readonly name: "bribesPositionsOf";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "bribeTokenAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "earned";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISolidlyLens.PositionBribe[]";
                readonly name: "bribes";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct ISolidlyLens.PositionBribesByTokenId[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deployerAddress";
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
            readonly name: "poolAddress";
            readonly type: "address";
        }];
        readonly name: "feeDistAddressByPoolAddress";
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
            readonly name: "poolAddress";
            readonly type: "address";
        }];
        readonly name: "gaugeAddressByPoolAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "gaugesAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "gaugesFactoryAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "generalFeesAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_veAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_routerAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_libraryAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_deployerAddress";
            readonly type: "address";
        }];
        readonly name: "initializeProxyStorage";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "libraryAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minterAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ownerAddress";
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
            readonly name: "poolAddress";
            readonly type: "address";
        }];
        readonly name: "poolInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "id";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "token0Address";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "token1Address";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "gaugeAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "bribeAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address[]";
                readonly name: "bribeTokensAddresses";
                readonly type: "address[]";
            }, {
                readonly internalType: "address";
                readonly name: "fees";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "feeDistAddress";
                readonly type: "address";
            }];
            readonly internalType: "struct ISolidlyLens.Pool";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "poolAddress";
            readonly type: "address";
        }];
        readonly name: "poolReservesInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "id";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "token0Address";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "token1Address";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "token0Reserve";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "token1Reserve";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "token0Decimals";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint8";
                readonly name: "token1Decimals";
                readonly type: "uint8";
            }];
            readonly internalType: "struct ISolidlyLens.PoolReserveData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolsAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolsFactoryAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolsInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "id";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "bool";
                readonly name: "stable";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "token0Address";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "token1Address";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "gaugeAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "bribeAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address[]";
                readonly name: "bribeTokensAddresses";
                readonly type: "address[]";
            }, {
                readonly internalType: "address";
                readonly name: "fees";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "feeDistAddress";
                readonly type: "address";
            }];
            readonly internalType: "struct ISolidlyLens.Pool[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "poolsLength";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "accountAddress";
            readonly type: "address";
        }];
        readonly name: "poolsPositionsOf";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "id";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "balanceOf";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISolidlyLens.PositionPool[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "accountAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "startIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "endIndex";
            readonly type: "uint256";
        }];
        readonly name: "poolsPositionsOf";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "id";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "balanceOf";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISolidlyLens.PositionPool[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_poolsAddresses";
            readonly type: "address[]";
        }];
        readonly name: "poolsReservesInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "id";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "token0Address";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "token1Address";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "token0Reserve";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "token1Reserve";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "token0Decimals";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint8";
                readonly name: "token1Decimals";
                readonly type: "uint8";
            }];
            readonly internalType: "struct ISolidlyLens.PoolReserveData[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "protocolMetadata";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "veAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "solidAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "voterAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "poolsFactoryAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "gaugesFactoryAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "minterAddress";
                readonly type: "address";
            }];
            readonly internalType: "struct SolidlyLens.ProtocolMetadata";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "routerAddress";
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
            readonly name: "_ownerAddress";
            readonly type: "address";
        }];
        readonly name: "setOwnerAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_veAddress";
            readonly type: "address";
        }];
        readonly name: "setVeAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "solidAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "veAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "veDistAddress";
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
            readonly name: "accountAddress";
            readonly type: "address";
        }];
        readonly name: "vePositionsOf";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "balanceOf";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "locked";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISolidlyLens.PositionVe[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "accountAddress";
            readonly type: "address";
        }];
        readonly name: "veTokensIdsOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "voterAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): SolidlyLensInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SolidlyLens;
}
