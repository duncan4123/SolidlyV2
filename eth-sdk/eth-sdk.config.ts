import { defineConfig } from '@dethcrypto/eth-sdk'

export default defineConfig({
  contracts: {
    mainnet: {
      dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
      SolidlyLens: '0x18f7722a4fd1d7c59f80258542500024f0b97570',
      SolidlyLensInterface: '0xd688d43cccf804c2604d6d6386eb827c7d5b2225',
      // fake: '0x37c6c1ad052ba777597b118cc4c4466b3abfb611',
      // sdafdsf: '0x1b36ec5c91ee64f941cc945a557dca26618fc4c8',
      fake1: '0x58550f469c22e9d4da18d03dc535870fe57f4830',
      BaseV2TokenInterface: '0x23972fe8834b09088e5ecd49169cc08b95b943ab',
      // fakeVeSOLID: '0x41936d0d6108b980fdc56dbb7147bd8d0ca2d1b9',
      VeV2Interface: '0x1505a8aa88bb1c4387f69dc1967b933088fe7468',
      BaseV2Factory: '0xd45467cc629afee7bb3aca7e2606997216fc92b2',
      BaseV2PairFactoryInterface: '0x8dc8105fcc1b13a6ad1db83c35112a230e617e5a',
      BaseV2Pair: '0xd04de7363c26225545904d6eaf329dd3e0ff7eaa',
      BaseV2PairInterface: '0x951883add7a71ae274e3b9b81ec3b59dab783fbb',
      sdafasdf: '0x935a91566740ccec73bbebac82ebddce4f012b39',
      BaseV2FeesFactoryInterface: '0xef9c15be68fa5b91357e9ce4788692a5cc79cb87',
      // Unverified: '0x3d0a4a1618aa2a52a88c2edb307b77d723c54774',
      // Unverified3: '0x1a549daa379ce21dc3a39ad008ed98253faa9d15',
      // Unverified1: '0xa2df053354a556effaf69434f8fa1bcea1c61ce1',
      BaseV2BribeFactoryInterface: '0x12f00cd90119905ec9964a9e4673c847b5bab1d8',
      // Unverified2: '0x449f3bc7d3840dc7692cf7f34a0716cafa97fbd4',
      BribeV2Interface: '0x00c8f85f621032220c7f151038398d5a680e712d',
      BaseV2GaugeFactory: '0x156faea6e44d662e048e7e1bb1e80ed922b92302',
      BaseV2GaugeFactoryInterface: '0x3b2070f76bc76ed785d387e570ee659329a363cd',
      GaugeV2: '0x5071712e2c99d09af356ffb27b754f3457194f89',
      GaugeV2Interface: '0xef46299db4c4c2d3dd1dbfe47e4359bcc75705db',
      // dffd: '0x6eab3ae4684c42f5c3c1239e65e3367edcdf5e9d',
      BaseV2FeeDistFactoryInterface:
        '0xca05c7a951ba477aa79f557f2e7efeb1cb593a12',
      // Unverified4: '0x06f5a69b46045a1abfaa4db51e6276e4a805c6d5',
      FeeDistV2Interface: '0xa91b01a7e0870b4264a01eac41fadd3e27689225',
      // Unverified5: '0xa906d4083068b5a2acf7bed706bf02b1bd99abfd',
      BaseV2VoterInterface: '0x08fbad3b245ea63c3bb8a0833973d1d29e1e598f',
      // Unverified6: '0x2e5cb0bacbfa5cb403756d8c257321b607d9a2c2',
      BaseV2GeneralFeesInterface: '0x9d143b9cfcd2d0b578d0eb5921e9e372c01aae77',
      BaseV2Router01: '0xea690b6a188c657811bf912db56432b45f733159',
      BaseV2Router01Interface: '0x6bbc49b4d59be631447afe8cb19124fe57aede9f',
      solidly_library: '0x6b5a3fed747978485488af55c5483d230da38102',
      SolidlyLibraryInterface: '0x396ab7906274aacbd9e84960cfd5661c9f287d9a',
      ve_distV2: '0xad82a0943436028ba9ee241330d6361c0228691d',
      VeDistV2Interface: '0x6b5c6988e425aaa8c97d0b379a3e49cdb9fced6a',
      BaseV2Minter: '0xe8c17ebb15095cf033b8967ec88618cfcd5af2b8',
      BaseV2MinterInterface: '0x9b94b045289b17a4cd1a556f090d294ed5cb8120',
      MerkleDistributorVeSolid: '0xc351cf5adcb3d75cd68661f4a1ae50a9d058d521',
      MerkleDistributor: '0x67977f219c5dd5ea1ac13910efab246af70afca1'
    }
  },
  rpc: {
    mainnet:
      'https://eth-mainnet.g.alchemy.com/v2/2DY3hgy6ABGYM0xJUwCMmorf3oiLRWPR',

    arbitrum:
      'https://arb-mainnet.g.alchemy.com/v2/hi0OOnRbk0kvfarDJrPZYBw4JI8SJFy-'
  },

  outputPath: 'C:/github/SolidlyV2/eth-sdk/sdk/'
})
