export const contractInfo = {
  _format: 'hh-sol-artifact-1',
  contractName: 'SubscriptionManager',
  sourceName: 'contracts/SubscriptionManager.sol',
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'subscriptionId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'Payout',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'subscriptionId',
          type: 'uint256',
        },
      ],
      name: 'SubscriptionActivated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'subscriptionId',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'payer',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'receiver',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'token',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'payoutPeriod',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'active',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'lastPayout',
              type: 'uint256',
            },
          ],
          indexed: false,
          internalType: 'struct SubscriptionManager.Subscription',
          name: 'subscription',
          type: 'tuple',
        },
      ],
      name: 'SubscriptionCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'subscriptionId',
          type: 'uint256',
        },
      ],
      name: 'SubscriptionPaused',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'uint256[]',
          name: 'subscriptionIds',
          type: 'uint256[]',
        },
      ],
      name: 'batchPayout',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'receiver',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'payoutPeriod',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'createSubscription',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'subscriptionId',
          type: 'uint256',
        },
      ],
      name: 'pauseSubscription',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'subscriptionId',
          type: 'uint256',
        },
      ],
      name: 'payoutSubscription',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'subscriptionId',
          type: 'uint256',
        },
      ],
      name: 'resumeSubsription',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'subscriptionCounter',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'subscriptions',
      outputs: [
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'receiver',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'payoutPeriod',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'active',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'lastPayout',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  bytecode:
    '0x608060405234801561001057600080fd5b50611232806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063871590ce1161005b578063871590ce146100f0578063903a82981461010c578063dff825cd1461012a578063e527344a146101465761007d565b80632d5bbf601461008257806341f23f0a146100b85780635a0f3ff0146100d4575b600080fd5b61009c60048036038101906100979190610a38565b610162565b6040516100af9796959493929190610ad0565b60405180910390f35b6100d260048036038101906100cd9190610a38565b610211565b005b6100ee60048036038101906100e99190610a38565b610316565b005b61010a60048036038101906101059190610b6b565b610659565b005b61011461089d565b6040516101219190610bd2565b60405180910390f35b610144600480360381019061013f9190610d46565b6108a3565b005b610160600480360381019061015b9190610a38565b6108e9565b005b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040154908060050160009054906101000a900460ff16908060060154905087565b8060008082815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ac90610dec565b60405180910390fd5b6000806000600154815260200190815260200160002060050160006101000a81548160ff021916908315150217905550817fbae5b137562fc2bbc1b14485b2812e506122725b29b6ccdae366ce8d6f99a26260405160405180910390a25050565b60008082815260200190815260200160002060050160009054906101000a900460ff16610378576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036f90610e58565b60405180910390fd5b60008060008381526020019081526020016000206040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820160009054906101000a900460ff16151515158152602001600682015481525050905080608001518160c00151426104e99190610ea7565b101561052a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052190610f27565b60405180910390fd5b4260008084815260200190815260200160002060060181905550806060015173ffffffffffffffffffffffffffffffffffffffff166323b872dd8260000151836020015184604001516040518463ffffffff1660e01b815260040161059193929190610f47565b6020604051808303816000875af11580156105b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d49190610faa565b610613576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90611023565b60405180910390fd5b817fd78d084c5d707305e01c7ca79e034f781ff07f60914159409de4f21fd5377c448260400151836060015160405161064d929190611043565b60405180910390a25050565b60006040518060e001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018481526020016001151581526020016000815250905080600080600154815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a08201518160050160006101000a81548160ff02191690831515021790555060c082015181600601559050506001806000828254610813919061106c565b92505081905550806020015173ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff167f28740044c315faef732bbd048432cec86b83104150b678cbe30dc86d64d345466001805461087f9190610ea7565b8460405161088e92919061115b565b60405180910390a35050505050565b60015481565b60005b81518110156108e5576108d28282815181106108c5576108c4611185565b5b6020026020010151610316565b80806108dd906111b4565b9150506108a6565b5050565b8060008082815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461098d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098490610dec565b60405180910390fd5b6001600080600154815260200190815260200160002060050160006101000a81548160ff021916908315150217905550817fea0763b72e87ee6b65cf92278728a21a469d3f853b4ee3beba78023b7653f85760405160405180910390a25050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610a1581610a02565b8114610a2057600080fd5b50565b600081359050610a3281610a0c565b92915050565b600060208284031215610a4e57610a4d6109f8565b5b6000610a5c84828501610a23565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a9082610a65565b9050919050565b610aa081610a85565b82525050565b610aaf81610a02565b82525050565b60008115159050919050565b610aca81610ab5565b82525050565b600060e082019050610ae5600083018a610a97565b610af26020830189610a97565b610aff6040830188610aa6565b610b0c6060830187610a97565b610b196080830186610aa6565b610b2660a0830185610ac1565b610b3360c0830184610aa6565b98975050505050505050565b610b4881610a85565b8114610b5357600080fd5b50565b600081359050610b6581610b3f565b92915050565b60008060008060808587031215610b8557610b846109f8565b5b6000610b9387828801610b56565b9450506020610ba487828801610a23565b9350506040610bb587828801610a23565b9250506060610bc687828801610b56565b91505092959194509250565b6000602082019050610be76000830184610aa6565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610c3b82610bf2565b810181811067ffffffffffffffff82111715610c5a57610c59610c03565b5b80604052505050565b6000610c6d6109ee565b9050610c798282610c32565b919050565b600067ffffffffffffffff821115610c9957610c98610c03565b5b602082029050602081019050919050565b600080fd5b6000610cc2610cbd84610c7e565b610c63565b90508083825260208201905060208402830185811115610ce557610ce4610caa565b5b835b81811015610d0e5780610cfa8882610a23565b845260208401935050602081019050610ce7565b5050509392505050565b600082601f830112610d2d57610d2c610bed565b5b8135610d3d848260208601610caf565b91505092915050565b600060208284031215610d5c57610d5b6109f8565b5b600082013567ffffffffffffffff811115610d7a57610d796109fd565b5b610d8684828501610d18565b91505092915050565b600082825260208201905092915050565b7f6e6f7420616c6c6f776564000000000000000000000000000000000000000000600082015250565b6000610dd6600b83610d8f565b9150610de182610da0565b602082019050919050565b60006020820190508181036000830152610e0581610dc9565b9050919050565b7f737562736372697074696f6e20696e6163746976650000000000000000000000600082015250565b6000610e42601583610d8f565b9150610e4d82610e0c565b602082019050919050565b60006020820190508181036000830152610e7181610e35565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610eb282610a02565b9150610ebd83610a02565b9250828203905081811115610ed557610ed4610e78565b5b92915050565b7f546f6f20736f6f6e000000000000000000000000000000000000000000000000600082015250565b6000610f11600883610d8f565b9150610f1c82610edb565b602082019050919050565b60006020820190508181036000830152610f4081610f04565b9050919050565b6000606082019050610f5c6000830186610a97565b610f696020830185610a97565b610f766040830184610aa6565b949350505050565b610f8781610ab5565b8114610f9257600080fd5b50565b600081519050610fa481610f7e565b92915050565b600060208284031215610fc057610fbf6109f8565b5b6000610fce84828501610f95565b91505092915050565b7f7472616e736665722066726f6d206661696c6564000000000000000000000000600082015250565b600061100d601483610d8f565b915061101882610fd7565b602082019050919050565b6000602082019050818103600083015261103c81611000565b9050919050565b60006040820190506110586000830185610aa6565b6110656020830184610a97565b9392505050565b600061107782610a02565b915061108283610a02565b925082820190508082111561109a57611099610e78565b5b92915050565b6110a981610a85565b82525050565b6110b881610a02565b82525050565b6110c781610ab5565b82525050565b60e0820160008201516110e360008501826110a0565b5060208201516110f660208501826110a0565b50604082015161110960408501826110af565b50606082015161111c60608501826110a0565b50608082015161112f60808501826110af565b5060a082015161114260a08501826110be565b5060c082015161115560c08501826110af565b50505050565b6000610100820190506111716000830185610aa6565b61117e60208301846110cd565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006111bf82610a02565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036111f1576111f0610e78565b5b60018201905091905056fea264697066735822122011581713ecc480d2b61263246c9dfb289a6eb2e3a7cdf9993064f2ae5a44f12b64736f6c63430008110033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b506004361061007d5760003560e01c8063871590ce1161005b578063871590ce146100f0578063903a82981461010c578063dff825cd1461012a578063e527344a146101465761007d565b80632d5bbf601461008257806341f23f0a146100b85780635a0f3ff0146100d4575b600080fd5b61009c60048036038101906100979190610a38565b610162565b6040516100af9796959493929190610ad0565b60405180910390f35b6100d260048036038101906100cd9190610a38565b610211565b005b6100ee60048036038101906100e99190610a38565b610316565b005b61010a60048036038101906101059190610b6b565b610659565b005b61011461089d565b6040516101219190610bd2565b60405180910390f35b610144600480360381019061013f9190610d46565b6108a3565b005b610160600480360381019061015b9190610a38565b6108e9565b005b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040154908060050160009054906101000a900460ff16908060060154905087565b8060008082815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ac90610dec565b60405180910390fd5b6000806000600154815260200190815260200160002060050160006101000a81548160ff021916908315150217905550817fbae5b137562fc2bbc1b14485b2812e506122725b29b6ccdae366ce8d6f99a26260405160405180910390a25050565b60008082815260200190815260200160002060050160009054906101000a900460ff16610378576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036f90610e58565b60405180910390fd5b60008060008381526020019081526020016000206040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820160009054906101000a900460ff16151515158152602001600682015481525050905080608001518160c00151426104e99190610ea7565b101561052a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052190610f27565b60405180910390fd5b4260008084815260200190815260200160002060060181905550806060015173ffffffffffffffffffffffffffffffffffffffff166323b872dd8260000151836020015184604001516040518463ffffffff1660e01b815260040161059193929190610f47565b6020604051808303816000875af11580156105b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d49190610faa565b610613576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90611023565b60405180910390fd5b817fd78d084c5d707305e01c7ca79e034f781ff07f60914159409de4f21fd5377c448260400151836060015160405161064d929190611043565b60405180910390a25050565b60006040518060e001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018481526020016001151581526020016000815250905080600080600154815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a08201518160050160006101000a81548160ff02191690831515021790555060c082015181600601559050506001806000828254610813919061106c565b92505081905550806020015173ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff167f28740044c315faef732bbd048432cec86b83104150b678cbe30dc86d64d345466001805461087f9190610ea7565b8460405161088e92919061115b565b60405180910390a35050505050565b60015481565b60005b81518110156108e5576108d28282815181106108c5576108c4611185565b5b6020026020010151610316565b80806108dd906111b4565b9150506108a6565b5050565b8060008082815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461098d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098490610dec565b60405180910390fd5b6001600080600154815260200190815260200160002060050160006101000a81548160ff021916908315150217905550817fea0763b72e87ee6b65cf92278728a21a469d3f853b4ee3beba78023b7653f85760405160405180910390a25050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610a1581610a02565b8114610a2057600080fd5b50565b600081359050610a3281610a0c565b92915050565b600060208284031215610a4e57610a4d6109f8565b5b6000610a5c84828501610a23565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a9082610a65565b9050919050565b610aa081610a85565b82525050565b610aaf81610a02565b82525050565b60008115159050919050565b610aca81610ab5565b82525050565b600060e082019050610ae5600083018a610a97565b610af26020830189610a97565b610aff6040830188610aa6565b610b0c6060830187610a97565b610b196080830186610aa6565b610b2660a0830185610ac1565b610b3360c0830184610aa6565b98975050505050505050565b610b4881610a85565b8114610b5357600080fd5b50565b600081359050610b6581610b3f565b92915050565b60008060008060808587031215610b8557610b846109f8565b5b6000610b9387828801610b56565b9450506020610ba487828801610a23565b9350506040610bb587828801610a23565b9250506060610bc687828801610b56565b91505092959194509250565b6000602082019050610be76000830184610aa6565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610c3b82610bf2565b810181811067ffffffffffffffff82111715610c5a57610c59610c03565b5b80604052505050565b6000610c6d6109ee565b9050610c798282610c32565b919050565b600067ffffffffffffffff821115610c9957610c98610c03565b5b602082029050602081019050919050565b600080fd5b6000610cc2610cbd84610c7e565b610c63565b90508083825260208201905060208402830185811115610ce557610ce4610caa565b5b835b81811015610d0e5780610cfa8882610a23565b845260208401935050602081019050610ce7565b5050509392505050565b600082601f830112610d2d57610d2c610bed565b5b8135610d3d848260208601610caf565b91505092915050565b600060208284031215610d5c57610d5b6109f8565b5b600082013567ffffffffffffffff811115610d7a57610d796109fd565b5b610d8684828501610d18565b91505092915050565b600082825260208201905092915050565b7f6e6f7420616c6c6f776564000000000000000000000000000000000000000000600082015250565b6000610dd6600b83610d8f565b9150610de182610da0565b602082019050919050565b60006020820190508181036000830152610e0581610dc9565b9050919050565b7f737562736372697074696f6e20696e6163746976650000000000000000000000600082015250565b6000610e42601583610d8f565b9150610e4d82610e0c565b602082019050919050565b60006020820190508181036000830152610e7181610e35565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610eb282610a02565b9150610ebd83610a02565b9250828203905081811115610ed557610ed4610e78565b5b92915050565b7f546f6f20736f6f6e000000000000000000000000000000000000000000000000600082015250565b6000610f11600883610d8f565b9150610f1c82610edb565b602082019050919050565b60006020820190508181036000830152610f4081610f04565b9050919050565b6000606082019050610f5c6000830186610a97565b610f696020830185610a97565b610f766040830184610aa6565b949350505050565b610f8781610ab5565b8114610f9257600080fd5b50565b600081519050610fa481610f7e565b92915050565b600060208284031215610fc057610fbf6109f8565b5b6000610fce84828501610f95565b91505092915050565b7f7472616e736665722066726f6d206661696c6564000000000000000000000000600082015250565b600061100d601483610d8f565b915061101882610fd7565b602082019050919050565b6000602082019050818103600083015261103c81611000565b9050919050565b60006040820190506110586000830185610aa6565b6110656020830184610a97565b9392505050565b600061107782610a02565b915061108283610a02565b925082820190508082111561109a57611099610e78565b5b92915050565b6110a981610a85565b82525050565b6110b881610a02565b82525050565b6110c781610ab5565b82525050565b60e0820160008201516110e360008501826110a0565b5060208201516110f660208501826110a0565b50604082015161110960408501826110af565b50606082015161111c60608501826110a0565b50608082015161112f60808501826110af565b5060a082015161114260a08501826110be565b5060c082015161115560c08501826110af565b50505050565b6000610100820190506111716000830185610aa6565b61117e60208301846110cd565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006111bf82610a02565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036111f1576111f0610e78565b5b60018201905091905056fea264697066735822122011581713ecc480d2b61263246c9dfb289a6eb2e3a7cdf9993064f2ae5a44f12b64736f6c63430008110033',
  linkReferences: {},
  deployedLinkReferences: {},
};