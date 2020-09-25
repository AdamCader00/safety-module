/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { AaveIncentivesController } from "./AaveIncentivesController";

export class AaveIncentivesControllerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    rewardToken: string,
    rewardsVault: string,
    psm: string,
    extraPsmReward: BigNumberish,
    emissionManager: string,
    distributionDuration: BigNumberish,
    overrides?: Overrides
  ): Promise<AaveIncentivesController> {
    return super.deploy(
      rewardToken,
      rewardsVault,
      psm,
      extraPsmReward,
      emissionManager,
      distributionDuration,
      overrides || {}
    ) as Promise<AaveIncentivesController>;
  }
  getDeployTransaction(
    rewardToken: string,
    rewardsVault: string,
    psm: string,
    extraPsmReward: BigNumberish,
    emissionManager: string,
    distributionDuration: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      rewardToken,
      rewardsVault,
      psm,
      extraPsmReward,
      emissionManager,
      distributionDuration,
      overrides || {}
    );
  }
  attach(address: string): AaveIncentivesController {
    return super.attach(address) as AaveIncentivesController;
  }
  connect(signer: Signer): AaveIncentivesControllerFactory {
    return super.connect(signer) as AaveIncentivesControllerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveIncentivesController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AaveIncentivesController;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "rewardToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "rewardsVault",
        type: "address"
      },
      {
        internalType: "contract IStakedAave",
        name: "psm",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "extraPsmReward",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "emissionManager",
        type: "address"
      },
      {
        internalType: "uint128",
        name: "distributionDuration",
        type: "uint128"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "emission",
        type: "uint256"
      }
    ],
    name: "AssetConfigUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "AssetIndexUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "RewardsAccrued",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "RewardsClaimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "UserIndexUpdated",
    type: "event"
  },
  {
    inputs: [],
    name: "DISTRIBUTION_END",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "EMISSION_MANAGER",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "EXTRA_PSM_REWARD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PRECISION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PSM",
    outputs: [
      {
        internalType: "contract IStakedAave",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "REVISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "REWARDS_VAULT",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "REWARD_TOKEN",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "assets",
    outputs: [
      {
        internalType: "uint128",
        name: "emissionPerSecond",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "lastUpdateTimestamp",
        type: "uint128"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "bool",
        name: "stake",
        type: "bool"
      }
    ],
    name: "claimRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "emissionPerSecond",
            type: "uint128"
          },
          {
            internalType: "uint256",
            name: "totalStaked",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address"
          }
        ],
        internalType: "struct DistributionTypes.AssetConfigInput[]",
        name: "assetsConfigInput",
        type: "tuple[]"
      }
    ],
    name: "configureAssets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]"
      },
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "getRewardsBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "getUserAssetData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "getUserUnclaimedRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "userBalance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256"
      }
    ],
    name: "handleAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x610140604052600080553480156200001657600080fd5b50604051620019d4380380620019d48339810160408190526200003991620000d2565b81816001600160801b03166200005e81426200009a60201b62000d6c1790919060201c565b608052506001600160601b0319606091821b811660a05296811b871660e05294851b8616610100525050911b90911660c05261012052620001b3565b600082820183811015620000cb5760405162461bcd60e51b8152600401620000c29062000163565b60405180910390fd5b9392505050565b60008060008060008060c08789031215620000eb578182fd5b8651620000f8816200019a565b60208801519096506200010b816200019a565b60408801519095506200011e816200019a565b60608801516080890151919550935062000138816200019a565b60a08801519092506001600160801b038116811462000155578182fd5b809150509295509295509295565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6001600160a01b0381168114620001b057600080fd5b50565b60805160a05160601c60c05160601c60e05160601c6101005160601c6101205161178f62000245600039806102f6528061059352508061060b52806107535280610b0e5250806105de528061072652806108805280610b3252508061031a52806106a152806108ad525080610b645280610d17525080610aea528061116e52806111aa52806111d7525061178f6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063919cd40f11610097578063b2a5dbfa11610066578063b2a5dbfa146101ce578063cbcbb507146101e1578063dde43cba146101e9578063f11b8188146101f157610100565b8063919cd40f146101a1578063946776cd146101a957806399248ea7146101b1578063aaf5eb68146101b957610100565b80635dac9ed7116100d35780635dac9ed71461015e5780638116c484146101735780638129fc1c146101865780638b599f261461018e57610100565b8063198fa81e1461010557806331873e2e1461012e5780633373ee4c146101435780633ec3126d14610156575b600080fd5b610118610113366004611338565b610213565b6040516101259190611731565b60405180910390f35b61014161013c366004611387565b61022e565b005b610118610151366004611353565b6102c3565b6101186102f4565b610166610318565b6040516101259190611560565b61011861018136600461140d565b61033c565b61014161082e565b61011861019c3660046113ba565b61092f565b610118610ae8565b610166610b0c565b610166610b30565b6101c1610b54565b604051610125919061173a565b6101416101dc36600461148a565b610b59565b610166610d15565b610118610d39565b6102046101ff366004611338565b610d3e565b6040516101259392919061170d565b6001600160a01b031660009081526034602052604090205490565b600061023c84338585610d91565b905080156102bd576001600160a01b0384166000908152603460205260409020546102679082610d6c565b6001600160a01b038516600081815260346020526040908190209290925590517f2468f9268c60ad90e2d49edb0032c8a001e733ae888b3ab8e982edf535be1a76906102b4908490611731565b60405180910390a25b50505050565b6001600160a01b03808216600090815260336020908152604080832093861683526002909301905220545b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008361034b57506000610825565b3360008181526034602052604090205460608767ffffffffffffffff8111801561037457600080fd5b506040519080825280602002602001820160405280156103ae57816020015b61039b6112ae565b8152602001906001900390816103935790505b50905060005b888110156104da578989828181106103c857fe5b90506020020160208101906103dd9190611338565b8282815181106103e957fe5b60209081029190910101516001600160a01b03909116905289898281811061040d57fe5b90506020020160208101906104229190611338565b6001600160a01b0316630afbcdc9856040518263ffffffff1660e01b815260040161044d9190611560565b604080518083038186803b15801561046457600080fd5b505afa158015610478573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049c919061153d565b8383815181106104a857fe5b60200260200101516020018484815181106104bf57fe5b602090810291909101015160400191909152526001016103b4565b5060006104e78483610e52565b9050801561053d576104f98382610d6c565b9250836001600160a01b03167f2468f9268c60ad90e2d49edb0032c8a001e733ae888b3ab8e982edf535be1a76826040516105349190611731565b60405180910390a25b8261054f576000945050505050610825565b600083891161055e5788610560565b835b6001600160a01b038616600090815260346020526040902081860390559050861561070f576105c46105bd60646105b7847f0000000000000000000000000000000000000000000000000000000000000000610ec6565b90610f00565b8290610d6c565b6040516323b872dd60e01b81529091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd90610637907f00000000000000000000000000000000000000000000000000000000000000009030908690600401611574565b602060405180830381600087803b15801561065157600080fd5b505af1158015610665573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068991906114fa565b506040516356e4bb9760e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063adc9772e906106d8908b908590600401611598565b600060405180830381600087803b1580156106f257600080fd5b505af1158015610706573d6000803e3d6000fd5b505050506107d3565b6040516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd9061077f907f0000000000000000000000000000000000000000000000000000000000000000908c908690600401611574565b602060405180830381600087803b15801561079957600080fd5b505af11580156107ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d191906114fa565b505b876001600160a01b0316336001600160a01b03167f9310ccfcb8de723f578a9e4282ea9f521f05ae40dc08f3068dfad528a65ee3c7836040516108169190611731565b60405180910390a39450505050505b95945050505050565b6000610838610f42565b905060005481116108645760405162461bcd60e51b815260040161085b9061167c565b60405180910390fd5b600081905560405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906108d9907f00000000000000000000000000000000000000000000000000000000000000009060001990600401611598565b602060405180830381600087803b1580156108f357600080fd5b505af1158015610907573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092b91906114fa565b5050565b6001600160a01b03811660009081526034602052604081205460608467ffffffffffffffff8111801561096157600080fd5b5060405190808252806020026020018201604052801561099b57816020015b6109886112ae565b8152602001906001900390816109805790505b50905060005b85811015610ac7578686828181106109b557fe5b90506020020160208101906109ca9190611338565b8282815181106109d657fe5b60209081029190910101516001600160a01b0390911690528686828181106109fa57fe5b9050602002016020810190610a0f9190611338565b6001600160a01b0316630afbcdc9866040518263ffffffff1660e01b8152600401610a3a9190611560565b604080518083038186803b158015610a5157600080fd5b505afa158015610a65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a89919061153d565b838381518110610a9557fe5b6020026020010151602001848481518110610aac57fe5b602090810291909101015160400191909152526001016109a1565b50610adc610ad58583610f47565b8390610d6c565b925050505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b601281565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ba15760405162461bcd60e51b815260040161085b906116ca565b60005b81811015610d1057600060336000858585818110610bbe57fe5b9050606002016040016020810190610bd69190611338565b6001600160a01b03166001600160a01b031681526020019081526020016000209050610c3b848484818110610c0757fe5b9050606002016040016020810190610c1f9190611338565b82868686818110610c2c57fe5b90506060020160200135611030565b50838383818110610c4857fe5b610c5e9260206060909202019081019150611516565b81546fffffffffffffffffffffffffffffffff19166001600160801b0391909116178155838383818110610c8e57fe5b9050606002016040016020810190610ca69190611338565b6001600160a01b03167f87fa03892a0556cb6b8f97e6d533a150d4d55fcbf275fff5fa003fa636bcc7fa858585818110610cdc57fe5b610cf29260206060909202019081019150611516565b604051610cff91906116f9565b60405180910390a250600101610ba4565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600181565b603360205260009081526040902080546001909101546001600160801b0380831692600160801b9004169083565b600082820183811015610ae15760405162461bcd60e51b815260040161085b90611604565b6001600160a01b0380841660009081526033602090815260408083209388168352600284019091528120549091908280610dcc888588611030565b9050808314610e44578615610de957610de68782856110ed565b91505b6001600160a01b03808a1660008181526002870160205260409081902084905551918a16917fbb123b5c06d5408bbea3c4fef481578175cfb432e3b482c6186f02ed9086585b90610e3b908590611731565b60405180910390a35b50925050505b949350505050565b600080805b8351811015610ebe57610eb4610ad586868481518110610e7357fe5b602002602001015160000151878581518110610e8b57fe5b602002602001015160200151888681518110610ea357fe5b602002602001015160400151610d91565b9150600101610e57565b509392505050565b600082610ed5575060006102ee565b82820282848281610ee257fe5b0414610ae15760405162461bcd60e51b815260040161085b9061163b565b6000610ae183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061110f565b600190565b600080805b8351811015610ebe57600060336000868481518110610f6757fe5b602090810291909101810151516001600160a01b031682528101919091526040016000908120600181015481548851929450610fcf926001600160801b0380831692600160801b900416908a9088908110610fbe57fe5b602002602001015160400151611146565b905061102461101d878581518110610fe357fe5b602002602001015160200151838560020160008c6001600160a01b03166001600160a01b03168152602001908152602001600020546110ed565b8590610d6c565b93505050600101610f4c565b6001820154825460009190600160801b90046001600160801b03164281141561105b57509050610ae1565b84546000906110769084906001600160801b03168488611146565b90508281146110ca57808660010181905550866001600160a01b03167f5777ca300dfe5bead41006fbce4389794dbc0ed8d6cccebfaf94630aa04184bc826040516110c19190611731565b60405180910390a25b85546001600160801b03428116600160801b029116178655925050509392505050565b6000610e4a670de0b6b3a76400006105b76111088686611245565b8790610ec6565b600081836111305760405162461bcd60e51b815260040161085b91906115b1565b50600083858161113c57fe5b0495945050505050565b6000831580611153575081155b80611166575042836001600160801b0316145b8061119a57507f0000000000000000000000000000000000000000000000000000000000000000836001600160801b031610155b156111a6575083610e4a565b60007f000000000000000000000000000000000000000000000000000000000000000042116111d557426111f7565b7f00000000000000000000000000000000000000000000000000000000000000005b9050600061120e826001600160801b038716611245565b905061123a87611234866105b7670de0b6b3a764000061122e8c88610ec6565b90610ec6565b90610d6c565b979650505050505050565b6000610ae183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250600081848411156112a65760405162461bcd60e51b815260040161085b91906115b1565b505050900390565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b80356001600160a01b03811681146102ee57600080fd5b60008083601f840112611300578182fd5b50813567ffffffffffffffff811115611317578182fd5b602083019150836020808302850101111561133157600080fd5b9250929050565b600060208284031215611349578081fd5b610ae183836112d8565b60008060408385031215611365578081fd5b61136f84846112d8565b915061137e84602085016112d8565b90509250929050565b60008060006060848603121561139b578081fd5b6113a585856112d8565b95602085013595506040909401359392505050565b6000806000604084860312156113ce578283fd5b833567ffffffffffffffff8111156113e4578384fd5b6113f0868287016112ef565b9094509250611404905085602086016112d8565b90509250925092565b600080600080600060808688031215611424578081fd5b853567ffffffffffffffff81111561143a578182fd5b611446888289016112ef565b9096509450506020860135925060408601356001600160a01b038116811461146c578182fd5b9150606086013561147c81611748565b809150509295509295909350565b6000806020838503121561149c578182fd5b823567ffffffffffffffff808211156114b3578384fd5b818501915085601f8301126114c6578384fd5b8135818111156114d4578485fd5b8660206060830285010111156114e8578485fd5b60209290920196919550909350505050565b60006020828403121561150b578081fd5b8151610ae181611748565b600060208284031215611527578081fd5b81356001600160801b0381168114610ae1578182fd5b6000806040838503121561154f578182fd5b505080516020909101519092909150565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6000602080835283518082850152825b818110156115dd578581018301518582016040015282016115c1565b818111156115ee5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526015908201527427a7262cafa2a6a4a9a9a4a7a72fa6a0a720a3a2a960591b604082015260600190565b6001600160801b0391909116815260200190565b6001600160801b039384168152919092166020820152604081019190915260600190565b90815260200190565b60ff91909116815260200190565b801515811461175657600080fd5b5056fea2646970667358221220c87fa059248bf56e40d4daf52f5575abf69456eec3dbf9505f19ecb9771ad65d64736f6c634300060c0033";
