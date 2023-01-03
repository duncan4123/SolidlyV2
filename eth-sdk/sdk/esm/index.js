import { Contract } from 'ethers';
import mainnet_dai_abi from '../../abis/mainnet/dai.json';
import mainnet_SolidlyLens_abi from '../../abis/mainnet/SolidlyLens.json';
import mainnet_SolidlyLensInterface_abi from '../../abis/mainnet/SolidlyLensInterface.json';
import mainnet_fake1_abi from '../../abis/mainnet/fake1.json';
import mainnet_BaseV2TokenInterface_abi from '../../abis/mainnet/BaseV2TokenInterface.json';
import mainnet_VeV2Interface_abi from '../../abis/mainnet/VeV2Interface.json';
import mainnet_BaseV2Factory_abi from '../../abis/mainnet/BaseV2Factory.json';
import mainnet_BaseV2PairFactoryInterface_abi from '../../abis/mainnet/BaseV2PairFactoryInterface.json';
import mainnet_BaseV2Pair_abi from '../../abis/mainnet/BaseV2Pair.json';
import mainnet_BaseV2PairInterface_abi from '../../abis/mainnet/BaseV2PairInterface.json';
import mainnet_sdafasdf_abi from '../../abis/mainnet/sdafasdf.json';
import mainnet_BaseV2FeesFactoryInterface_abi from '../../abis/mainnet/BaseV2FeesFactoryInterface.json';
import mainnet_BaseV2BribeFactoryInterface_abi from '../../abis/mainnet/BaseV2BribeFactoryInterface.json';
import mainnet_BribeV2Interface_abi from '../../abis/mainnet/BribeV2Interface.json';
import mainnet_BaseV2GaugeFactory_abi from '../../abis/mainnet/BaseV2GaugeFactory.json';
import mainnet_BaseV2GaugeFactoryInterface_abi from '../../abis/mainnet/BaseV2GaugeFactoryInterface.json';
import mainnet_GaugeV2_abi from '../../abis/mainnet/GaugeV2.json';
import mainnet_GaugeV2Interface_abi from '../../abis/mainnet/GaugeV2Interface.json';
import mainnet_BaseV2FeeDistFactoryInterface_abi from '../../abis/mainnet/BaseV2FeeDistFactoryInterface.json';
import mainnet_FeeDistV2Interface_abi from '../../abis/mainnet/FeeDistV2Interface.json';
import mainnet_BaseV2VoterInterface_abi from '../../abis/mainnet/BaseV2VoterInterface.json';
import mainnet_BaseV2GeneralFeesInterface_abi from '../../abis/mainnet/BaseV2GeneralFeesInterface.json';
import mainnet_BaseV2Router01_abi from '../../abis/mainnet/BaseV2Router01.json';
import mainnet_BaseV2Router01Interface_abi from '../../abis/mainnet/BaseV2Router01Interface.json';
import mainnet_solidly_library_abi from '../../abis/mainnet/solidly_library.json';
import mainnet_SolidlyLibraryInterface_abi from '../../abis/mainnet/SolidlyLibraryInterface.json';
import mainnet_ve_distV2_abi from '../../abis/mainnet/ve_distV2.json';
import mainnet_VeDistV2Interface_abi from '../../abis/mainnet/VeDistV2Interface.json';
import mainnet_BaseV2Minter_abi from '../../abis/mainnet/BaseV2Minter.json';
import mainnet_BaseV2MinterInterface_abi from '../../abis/mainnet/BaseV2MinterInterface.json';
import mainnet_MerkleDistributorVeSolid_abi from '../../abis/mainnet/MerkleDistributorVeSolid.json';
import mainnet_MerkleDistributor_abi from '../../abis/mainnet/MerkleDistributor.json';
export function getContract(address, abi, defaultSignerOrProvider) {
    return new Contract(address, abi, defaultSignerOrProvider);
}
export function getMainnetSdk(defaultSignerOrProvider) {
    return {
        "dai": getContract('0x6b175474e89094c44da98b954eedeac495271d0f', mainnet_dai_abi, defaultSignerOrProvider),
        "SolidlyLens": getContract('0x18f7722a4fd1d7c59f80258542500024f0b97570', mainnet_SolidlyLens_abi, defaultSignerOrProvider),
        "SolidlyLensInterface": getContract('0xd688d43cccf804c2604d6d6386eb827c7d5b2225', mainnet_SolidlyLensInterface_abi, defaultSignerOrProvider),
        "fake1": getContract('0x58550f469c22e9d4da18d03dc535870fe57f4830', mainnet_fake1_abi, defaultSignerOrProvider),
        "BaseV2TokenInterface": getContract('0x23972fe8834b09088e5ecd49169cc08b95b943ab', mainnet_BaseV2TokenInterface_abi, defaultSignerOrProvider),
        "VeV2Interface": getContract('0x1505a8aa88bb1c4387f69dc1967b933088fe7468', mainnet_VeV2Interface_abi, defaultSignerOrProvider),
        "BaseV2Factory": getContract('0xd45467cc629afee7bb3aca7e2606997216fc92b2', mainnet_BaseV2Factory_abi, defaultSignerOrProvider),
        "BaseV2PairFactoryInterface": getContract('0x8dc8105fcc1b13a6ad1db83c35112a230e617e5a', mainnet_BaseV2PairFactoryInterface_abi, defaultSignerOrProvider),
        "BaseV2Pair": getContract('0xd04de7363c26225545904d6eaf329dd3e0ff7eaa', mainnet_BaseV2Pair_abi, defaultSignerOrProvider),
        "BaseV2PairInterface": getContract('0x951883add7a71ae274e3b9b81ec3b59dab783fbb', mainnet_BaseV2PairInterface_abi, defaultSignerOrProvider),
        "sdafasdf": getContract('0x935a91566740ccec73bbebac82ebddce4f012b39', mainnet_sdafasdf_abi, defaultSignerOrProvider),
        "BaseV2FeesFactoryInterface": getContract('0xef9c15be68fa5b91357e9ce4788692a5cc79cb87', mainnet_BaseV2FeesFactoryInterface_abi, defaultSignerOrProvider),
        "BaseV2BribeFactoryInterface": getContract('0x12f00cd90119905ec9964a9e4673c847b5bab1d8', mainnet_BaseV2BribeFactoryInterface_abi, defaultSignerOrProvider),
        "BribeV2Interface": getContract('0x00c8f85f621032220c7f151038398d5a680e712d', mainnet_BribeV2Interface_abi, defaultSignerOrProvider),
        "BaseV2GaugeFactory": getContract('0x156faea6e44d662e048e7e1bb1e80ed922b92302', mainnet_BaseV2GaugeFactory_abi, defaultSignerOrProvider),
        "BaseV2GaugeFactoryInterface": getContract('0x3b2070f76bc76ed785d387e570ee659329a363cd', mainnet_BaseV2GaugeFactoryInterface_abi, defaultSignerOrProvider),
        "GaugeV2": getContract('0x5071712e2c99d09af356ffb27b754f3457194f89', mainnet_GaugeV2_abi, defaultSignerOrProvider),
        "GaugeV2Interface": getContract('0xef46299db4c4c2d3dd1dbfe47e4359bcc75705db', mainnet_GaugeV2Interface_abi, defaultSignerOrProvider),
        "BaseV2FeeDistFactoryInterface": getContract('0xca05c7a951ba477aa79f557f2e7efeb1cb593a12', mainnet_BaseV2FeeDistFactoryInterface_abi, defaultSignerOrProvider),
        "FeeDistV2Interface": getContract('0xa91b01a7e0870b4264a01eac41fadd3e27689225', mainnet_FeeDistV2Interface_abi, defaultSignerOrProvider),
        "BaseV2VoterInterface": getContract('0x08fbad3b245ea63c3bb8a0833973d1d29e1e598f', mainnet_BaseV2VoterInterface_abi, defaultSignerOrProvider),
        "BaseV2GeneralFeesInterface": getContract('0x9d143b9cfcd2d0b578d0eb5921e9e372c01aae77', mainnet_BaseV2GeneralFeesInterface_abi, defaultSignerOrProvider),
        "BaseV2Router01": getContract('0xea690b6a188c657811bf912db56432b45f733159', mainnet_BaseV2Router01_abi, defaultSignerOrProvider),
        "BaseV2Router01Interface": getContract('0x6bbc49b4d59be631447afe8cb19124fe57aede9f', mainnet_BaseV2Router01Interface_abi, defaultSignerOrProvider),
        "solidly_library": getContract('0x6b5a3fed747978485488af55c5483d230da38102', mainnet_solidly_library_abi, defaultSignerOrProvider),
        "SolidlyLibraryInterface": getContract('0x396ab7906274aacbd9e84960cfd5661c9f287d9a', mainnet_SolidlyLibraryInterface_abi, defaultSignerOrProvider),
        "ve_distV2": getContract('0xad82a0943436028ba9ee241330d6361c0228691d', mainnet_ve_distV2_abi, defaultSignerOrProvider),
        "VeDistV2Interface": getContract('0x6b5c6988e425aaa8c97d0b379a3e49cdb9fced6a', mainnet_VeDistV2Interface_abi, defaultSignerOrProvider),
        "BaseV2Minter": getContract('0xe8c17ebb15095cf033b8967ec88618cfcd5af2b8', mainnet_BaseV2Minter_abi, defaultSignerOrProvider),
        "BaseV2MinterInterface": getContract('0x9b94b045289b17a4cd1a556f090d294ed5cb8120', mainnet_BaseV2MinterInterface_abi, defaultSignerOrProvider),
        "MerkleDistributorVeSolid": getContract('0xc351cf5adcb3d75cd68661f4a1ae50a9d058d521', mainnet_MerkleDistributorVeSolid_abi, defaultSignerOrProvider),
        "MerkleDistributor": getContract('0x67977f219c5dd5ea1ac13910efab246af70afca1', mainnet_MerkleDistributor_abi, defaultSignerOrProvider),
    };
}
