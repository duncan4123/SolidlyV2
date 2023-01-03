"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainnetSdk = exports.getContract = void 0;
const ethers_1 = require("ethers");
const dai_json_1 = __importDefault(require("../../abis/mainnet/dai.json"));
const SolidlyLens_json_1 = __importDefault(require("../../abis/mainnet/SolidlyLens.json"));
const SolidlyLensInterface_json_1 = __importDefault(require("../../abis/mainnet/SolidlyLensInterface.json"));
const fake1_json_1 = __importDefault(require("../../abis/mainnet/fake1.json"));
const BaseV2TokenInterface_json_1 = __importDefault(require("../../abis/mainnet/BaseV2TokenInterface.json"));
const VeV2Interface_json_1 = __importDefault(require("../../abis/mainnet/VeV2Interface.json"));
const BaseV2Factory_json_1 = __importDefault(require("../../abis/mainnet/BaseV2Factory.json"));
const BaseV2PairFactoryInterface_json_1 = __importDefault(require("../../abis/mainnet/BaseV2PairFactoryInterface.json"));
const BaseV2Pair_json_1 = __importDefault(require("../../abis/mainnet/BaseV2Pair.json"));
const BaseV2PairInterface_json_1 = __importDefault(require("../../abis/mainnet/BaseV2PairInterface.json"));
const sdafasdf_json_1 = __importDefault(require("../../abis/mainnet/sdafasdf.json"));
const BaseV2FeesFactoryInterface_json_1 = __importDefault(require("../../abis/mainnet/BaseV2FeesFactoryInterface.json"));
const BaseV2BribeFactoryInterface_json_1 = __importDefault(require("../../abis/mainnet/BaseV2BribeFactoryInterface.json"));
const BribeV2Interface_json_1 = __importDefault(require("../../abis/mainnet/BribeV2Interface.json"));
const BaseV2GaugeFactory_json_1 = __importDefault(require("../../abis/mainnet/BaseV2GaugeFactory.json"));
const BaseV2GaugeFactoryInterface_json_1 = __importDefault(require("../../abis/mainnet/BaseV2GaugeFactoryInterface.json"));
const GaugeV2_json_1 = __importDefault(require("../../abis/mainnet/GaugeV2.json"));
const GaugeV2Interface_json_1 = __importDefault(require("../../abis/mainnet/GaugeV2Interface.json"));
const BaseV2FeeDistFactoryInterface_json_1 = __importDefault(require("../../abis/mainnet/BaseV2FeeDistFactoryInterface.json"));
const FeeDistV2Interface_json_1 = __importDefault(require("../../abis/mainnet/FeeDistV2Interface.json"));
const BaseV2VoterInterface_json_1 = __importDefault(require("../../abis/mainnet/BaseV2VoterInterface.json"));
const BaseV2GeneralFeesInterface_json_1 = __importDefault(require("../../abis/mainnet/BaseV2GeneralFeesInterface.json"));
const BaseV2Router01_json_1 = __importDefault(require("../../abis/mainnet/BaseV2Router01.json"));
const BaseV2Router01Interface_json_1 = __importDefault(require("../../abis/mainnet/BaseV2Router01Interface.json"));
const solidly_library_json_1 = __importDefault(require("../../abis/mainnet/solidly_library.json"));
const SolidlyLibraryInterface_json_1 = __importDefault(require("../../abis/mainnet/SolidlyLibraryInterface.json"));
const ve_distV2_json_1 = __importDefault(require("../../abis/mainnet/ve_distV2.json"));
const VeDistV2Interface_json_1 = __importDefault(require("../../abis/mainnet/VeDistV2Interface.json"));
const BaseV2Minter_json_1 = __importDefault(require("../../abis/mainnet/BaseV2Minter.json"));
const BaseV2MinterInterface_json_1 = __importDefault(require("../../abis/mainnet/BaseV2MinterInterface.json"));
const MerkleDistributorVeSolid_json_1 = __importDefault(require("../../abis/mainnet/MerkleDistributorVeSolid.json"));
const MerkleDistributor_json_1 = __importDefault(require("../../abis/mainnet/MerkleDistributor.json"));
function getContract(address, abi, defaultSignerOrProvider) {
    return new ethers_1.Contract(address, abi, defaultSignerOrProvider);
}
exports.getContract = getContract;
function getMainnetSdk(defaultSignerOrProvider) {
    return {
        "dai": getContract('0x6b175474e89094c44da98b954eedeac495271d0f', dai_json_1.default, defaultSignerOrProvider),
        "SolidlyLens": getContract('0x18f7722a4fd1d7c59f80258542500024f0b97570', SolidlyLens_json_1.default, defaultSignerOrProvider),
        "SolidlyLensInterface": getContract('0xd688d43cccf804c2604d6d6386eb827c7d5b2225', SolidlyLensInterface_json_1.default, defaultSignerOrProvider),
        "fake1": getContract('0x58550f469c22e9d4da18d03dc535870fe57f4830', fake1_json_1.default, defaultSignerOrProvider),
        "BaseV2TokenInterface": getContract('0x23972fe8834b09088e5ecd49169cc08b95b943ab', BaseV2TokenInterface_json_1.default, defaultSignerOrProvider),
        "VeV2Interface": getContract('0x1505a8aa88bb1c4387f69dc1967b933088fe7468', VeV2Interface_json_1.default, defaultSignerOrProvider),
        "BaseV2Factory": getContract('0xd45467cc629afee7bb3aca7e2606997216fc92b2', BaseV2Factory_json_1.default, defaultSignerOrProvider),
        "BaseV2PairFactoryInterface": getContract('0x8dc8105fcc1b13a6ad1db83c35112a230e617e5a', BaseV2PairFactoryInterface_json_1.default, defaultSignerOrProvider),
        "BaseV2Pair": getContract('0xd04de7363c26225545904d6eaf329dd3e0ff7eaa', BaseV2Pair_json_1.default, defaultSignerOrProvider),
        "BaseV2PairInterface": getContract('0x951883add7a71ae274e3b9b81ec3b59dab783fbb', BaseV2PairInterface_json_1.default, defaultSignerOrProvider),
        "sdafasdf": getContract('0x935a91566740ccec73bbebac82ebddce4f012b39', sdafasdf_json_1.default, defaultSignerOrProvider),
        "BaseV2FeesFactoryInterface": getContract('0xef9c15be68fa5b91357e9ce4788692a5cc79cb87', BaseV2FeesFactoryInterface_json_1.default, defaultSignerOrProvider),
        "BaseV2BribeFactoryInterface": getContract('0x12f00cd90119905ec9964a9e4673c847b5bab1d8', BaseV2BribeFactoryInterface_json_1.default, defaultSignerOrProvider),
        "BribeV2Interface": getContract('0x00c8f85f621032220c7f151038398d5a680e712d', BribeV2Interface_json_1.default, defaultSignerOrProvider),
        "BaseV2GaugeFactory": getContract('0x156faea6e44d662e048e7e1bb1e80ed922b92302', BaseV2GaugeFactory_json_1.default, defaultSignerOrProvider),
        "BaseV2GaugeFactoryInterface": getContract('0x3b2070f76bc76ed785d387e570ee659329a363cd', BaseV2GaugeFactoryInterface_json_1.default, defaultSignerOrProvider),
        "GaugeV2": getContract('0x5071712e2c99d09af356ffb27b754f3457194f89', GaugeV2_json_1.default, defaultSignerOrProvider),
        "GaugeV2Interface": getContract('0xef46299db4c4c2d3dd1dbfe47e4359bcc75705db', GaugeV2Interface_json_1.default, defaultSignerOrProvider),
        "BaseV2FeeDistFactoryInterface": getContract('0xca05c7a951ba477aa79f557f2e7efeb1cb593a12', BaseV2FeeDistFactoryInterface_json_1.default, defaultSignerOrProvider),
        "FeeDistV2Interface": getContract('0xa91b01a7e0870b4264a01eac41fadd3e27689225', FeeDistV2Interface_json_1.default, defaultSignerOrProvider),
        "BaseV2VoterInterface": getContract('0x08fbad3b245ea63c3bb8a0833973d1d29e1e598f', BaseV2VoterInterface_json_1.default, defaultSignerOrProvider),
        "BaseV2GeneralFeesInterface": getContract('0x9d143b9cfcd2d0b578d0eb5921e9e372c01aae77', BaseV2GeneralFeesInterface_json_1.default, defaultSignerOrProvider),
        "BaseV2Router01": getContract('0xea690b6a188c657811bf912db56432b45f733159', BaseV2Router01_json_1.default, defaultSignerOrProvider),
        "BaseV2Router01Interface": getContract('0x6bbc49b4d59be631447afe8cb19124fe57aede9f', BaseV2Router01Interface_json_1.default, defaultSignerOrProvider),
        "solidly_library": getContract('0x6b5a3fed747978485488af55c5483d230da38102', solidly_library_json_1.default, defaultSignerOrProvider),
        "SolidlyLibraryInterface": getContract('0x396ab7906274aacbd9e84960cfd5661c9f287d9a', SolidlyLibraryInterface_json_1.default, defaultSignerOrProvider),
        "ve_distV2": getContract('0xad82a0943436028ba9ee241330d6361c0228691d', ve_distV2_json_1.default, defaultSignerOrProvider),
        "VeDistV2Interface": getContract('0x6b5c6988e425aaa8c97d0b379a3e49cdb9fced6a', VeDistV2Interface_json_1.default, defaultSignerOrProvider),
        "BaseV2Minter": getContract('0xe8c17ebb15095cf033b8967ec88618cfcd5af2b8', BaseV2Minter_json_1.default, defaultSignerOrProvider),
        "BaseV2MinterInterface": getContract('0x9b94b045289b17a4cd1a556f090d294ed5cb8120', BaseV2MinterInterface_json_1.default, defaultSignerOrProvider),
        "MerkleDistributorVeSolid": getContract('0xc351cf5adcb3d75cd68661f4a1ae50a9d058d521', MerkleDistributorVeSolid_json_1.default, defaultSignerOrProvider),
        "MerkleDistributor": getContract('0x67977f219c5dd5ea1ac13910efab246af70afca1', MerkleDistributor_json_1.default, defaultSignerOrProvider),
    };
}
exports.getMainnetSdk = getMainnetSdk;
