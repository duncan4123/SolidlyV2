// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.11;

contract GaugeV2Interface {
    uint256 internal constant DURATION = 7 days; // rewards are released over 7 days
    uint256 internal constant PRECISION = 10**44;
    /**
     * @dev storage slots start here
     */

    // simple re-entrancy check
    uint256 internal _unlocked = 1;

    address public stake; // the LP token that needs to be staked for rewards
    address public _ve; // the ve token used for gauges
    address public solid;
    address public bribe;
    address public voter;

    uint256 public derivedSupply;
    mapping(address => uint128) public derivedBalances;
    mapping(address => uint256) public tokenIds;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => bool)) public isOptIn; // userAddress => rewardAddress => bool
    mapping(address => address[]) public userOptIns; // array of rewards the user is opted into
    mapping(address => mapping(address => uint256)) public userOptInsIndex; // index of pools within userOptIns userAddress =>rewardAddress => index

    // default snx staking contract implementation
    mapping(address => RewardData) public rewardData;

    struct RewardData {
        uint128 rewardRatePerWeek;
        uint128 derivedSupply;
        uint256 rewardPerTokenStored;
        uint40 periodFinish;
        uint40 lastUpdateTime;
    }
    struct UserRewardData {
        uint256 userRewardPerTokenPaid;
        uint256 userEarnedStored;
    }

    mapping(address => mapping(address => UserRewardData))
        public userRewardData; // userAddress => tokenAddress => userRewardData

    uint256 public totalSupply;

    address[] public rewards;
    mapping(address => bool) public isReward;

    uint256 public fees0;
    uint256 public fees1;

    event ClaimFees(address indexed from, uint256 claimed0, uint256 claimed1);
    event ClaimRewards(
        address indexed from,
        address indexed reward,
        uint256 amount
    );
    event ClawbackRewards(address indexed reward, uint256 amount);
    event Deposit(address indexed from, uint256 tokenId, uint256 amount);
    event NotifyReward(
        address indexed from,
        address indexed reward,
        uint256 amount
    );
    event OptIn(address indexed from, address indexed reward);
    event OptOut(address indexed from, address indexed reward);
    event Withdraw(address indexed from, uint256 tokenId, uint256 amount);

    function claimFees()
        external
        returns (uint256 claimed0, uint256 claimed1)
    {}

    function clawbackRewards(address token, uint256 amount) external {}

    function deposit(uint256 amount, uint256 tokenId) external {}

    function depositAll(uint256 tokenId) external {}

    function depositAndOptIn(
        uint256 amount,
        uint256 tokenId,
        address[] memory optInPools
    ) external {}

    function derivedBalance(address account) external view returns (uint256) {}

    function earned(address token, address account)
        external
        view
        returns (uint256)
    {}

    function emergencyOptOut(address[] memory tokens) external {}

    function factoryAddress() external view returns (address _factory) {}

    function getReward(address account, address[] memory tokens) external {}

    function governanceAddress()
        external
        view
        returns (address _governanceAddress)
    {}

    function initialize(
        address _stake,
        address _bribe,
        address __ve,
        address _voter
    ) external {}

    function lastTimeRewardApplicable(address token)
        external
        view
        returns (uint256)
    {}

    function lastUpdateTime(address token) external view returns (uint256) {}

    function left(address token) external view returns (uint256) {}

    function notifyRewardAmount(address token, uint256 amount) external {}

    function optIn(address[] memory tokens) external {}

    function optOut(address[] memory tokens) external {}

    function periodFinish(address token) external view returns (uint256) {}

    function rewardPerToken(address token) external view returns (uint256) {}

    function rewardPerTokenStored(address token)
        external
        view
        returns (uint256)
    {}

    function rewardRate(address token) external view returns (uint256) {}

    function rewardsListLength() external view returns (uint256) {}

    function userRewardPerTokenStored(address token, address account)
        external
        view
        returns (uint256)
    {}

    function withdraw(uint256 amount) external {}

    function withdrawAll() external {}

    function withdrawToken(uint256 amount, uint256 tokenId) external {}
}
