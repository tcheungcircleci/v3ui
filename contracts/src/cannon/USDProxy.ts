// !!! DO NOT EDIT !!! Automatically generated file

export const address = '0x629673e90e428069AeB328DE4EF2040a7C22f723';
export const abi = [
  'error ImplementationIsSterile(address implementation)',
  'error NoChange()',
  'error NotAContract(address contr)',
  'error NotNominated(address addr)',
  'error Unauthorized(address addr)',
  'error UpgradeSimulationFailed()',
  'error ZeroAddress()',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event Upgraded(address indexed self, address implementation)',
  'function acceptOwnership()',
  'function getImplementation() view returns (address)',
  'function nominateNewOwner(address newNominatedOwner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function renounceNomination()',
  'function simulateUpgradeTo(address newImplementation)',
  'function upgradeTo(address newImplementation)',
  'error MismatchAssociatedSystemKind(bytes32 expected, bytes32 actual)',
  'error MissingAssociatedSystem(bytes32 id)',
  'event AssociatedSystemSet(bytes32 indexed kind, bytes32 indexed id, address proxy, address impl)',
  'function getAssociatedSystem(bytes32 id) view returns (address addr, bytes32 kind)',
  'function initOrUpgradeNft(bytes32 id, string name, string symbol, string uri, address impl)',
  'function initOrUpgradeToken(bytes32 id, string name, string symbol, uint8 decimals, address impl)',
  'function registerUnmanagedSystem(bytes32 id, address endpoint)',
  'error AlreadyInitialized()',
  'error InsufficientAllowance(uint256 required, uint256 existing)',
  'error InsufficientBalance(uint256 required, uint256 existing)',
  'error InvalidParameter(string parameter, string reason)',
  'event Approval(address indexed owner, address indexed spender, uint256 amount)',
  'event Transfer(address indexed from, address indexed to, uint256 amount)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function balanceOf(address owner) view returns (uint256)',
  'function burn(uint256 amount)',
  'function burn(address target, uint256 amount)',
  'function burnWithAllowance(address from, address spender, uint256 amount)',
  'function decimals() view returns (uint8)',
  'function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)',
  'function increaseAllowance(address spender, uint256 addedValue) returns (bool)',
  'function initialize(string tokenName, string tokenSymbol, uint8 tokenDecimals)',
  'function isInitialized() view returns (bool)',
  'function mint(address target, uint256 amount)',
  'function name() view returns (string)',
  'function setAllowance(address from, address spender, uint256 amount)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function transferFrom(address from, address to, uint256 amount) returns (bool)',
];
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface USDProxyInterface extends utils.Interface {
  functions: {
    'acceptOwnership()': FunctionFragment;
    'getImplementation()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceNomination()': FunctionFragment;
    'simulateUpgradeTo(address)': FunctionFragment;
    'upgradeTo(address)': FunctionFragment;
    'getAssociatedSystem(bytes32)': FunctionFragment;
    'initOrUpgradeNft(bytes32,string,string,string,address)': FunctionFragment;
    'initOrUpgradeToken(bytes32,string,string,uint8,address)': FunctionFragment;
    'registerUnmanagedSystem(bytes32,address)': FunctionFragment;
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'burn(uint256)': FunctionFragment;
    'burn(address,uint256)': FunctionFragment;
    'burnWithAllowance(address,address,uint256)': FunctionFragment;
    'decimals()': FunctionFragment;
    'decreaseAllowance(address,uint256)': FunctionFragment;
    'increaseAllowance(address,uint256)': FunctionFragment;
    'initialize(string,string,uint8)': FunctionFragment;
    'isInitialized()': FunctionFragment;
    'mint(address,uint256)': FunctionFragment;
    'name()': FunctionFragment;
    'setAllowance(address,address,uint256)': FunctionFragment;
    'symbol()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptOwnership'
      | 'getImplementation'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'renounceNomination'
      | 'simulateUpgradeTo'
      | 'upgradeTo'
      | 'getAssociatedSystem'
      | 'initOrUpgradeNft'
      | 'initOrUpgradeToken'
      | 'registerUnmanagedSystem'
      | 'allowance'
      | 'approve'
      | 'balanceOf'
      | 'burn(uint256)'
      | 'burn(address,uint256)'
      | 'burnWithAllowance'
      | 'decimals'
      | 'decreaseAllowance'
      | 'increaseAllowance'
      | 'initialize'
      | 'isInitialized'
      | 'mint'
      | 'name'
      | 'setAllowance'
      | 'symbol'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getImplementation', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nominateNewOwner', values: [string]): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceNomination', values?: undefined): string;
  encodeFunctionData(functionFragment: 'simulateUpgradeTo', values: [string]): string;
  encodeFunctionData(functionFragment: 'upgradeTo', values: [string]): string;
  encodeFunctionData(functionFragment: 'getAssociatedSystem', values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'initOrUpgradeNft',
    values: [BytesLike, string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'initOrUpgradeToken',
    values: [BytesLike, string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'registerUnmanagedSystem',
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: 'allowance', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'burn(uint256)', values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'burn(address,uint256)',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'burnWithAllowance',
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'decreaseAllowance', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'increaseAllowance', values: [string, BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'isInitialized', values?: undefined): string;
  encodeFunctionData(functionFragment: 'mint', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setAllowance',
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transfer', values: [string, BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getImplementation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceNomination', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'simulateUpgradeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAssociatedSystem', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initOrUpgradeNft', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initOrUpgradeToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registerUnmanagedSystem', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burn(uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burn(address,uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnWithAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decreaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isInitialized', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;

  events: {
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'Upgraded(address,address)': EventFragment;
    'AssociatedSystemSet(bytes32,bytes32,address,address)': EventFragment;
    'Approval(address,address,uint256)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Upgraded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AssociatedSystemSet'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[string, string], OwnerChangedEventObject>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface OwnerNominatedEventObject {
  newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[string], OwnerNominatedEventObject>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface UpgradedEventObject {
  self: string;
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string, string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface AssociatedSystemSetEventObject {
  kind: string;
  id: string;
  proxy: string;
  impl: string;
}
export type AssociatedSystemSetEvent = TypedEvent<
  [string, string, string, string],
  AssociatedSystemSetEventObject
>;

export type AssociatedSystemSetEventFilter = TypedEventFilter<AssociatedSystemSetEvent>;

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  amount: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  amount: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface USDProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: USDProxyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

    getImplementation(overrides?: CallOverrides): Promise<[string]>;

    nominateNewOwner(
      newNominatedOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceNomination(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

    simulateUpgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getAssociatedSystem(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { addr: string; kind: string }>;

    initOrUpgradeNft(
      id: BytesLike,
      name: string,
      symbol: string,
      uri: string,
      impl: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    initOrUpgradeToken(
      id: BytesLike,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      impl: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    registerUnmanagedSystem(
      id: BytesLike,
      endpoint: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    'burn(uint256)'(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    'burn(address,uint256)'(
      target: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    burnWithAllowance(
      from: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    initialize(
      tokenName: string,
      tokenSymbol: string,
      tokenDecimals: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    mint(
      target: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    setAllowance(
      from: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  getImplementation(overrides?: CallOverrides): Promise<string>;

  nominateNewOwner(
    newNominatedOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceNomination(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  simulateUpgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getAssociatedSystem(
    id: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string] & { addr: string; kind: string }>;

  initOrUpgradeNft(
    id: BytesLike,
    name: string,
    symbol: string,
    uri: string,
    impl: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  initOrUpgradeToken(
    id: BytesLike,
    name: string,
    symbol: string,
    decimals: BigNumberish,
    impl: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  registerUnmanagedSystem(
    id: BytesLike,
    endpoint: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  'burn(uint256)'(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  'burn(address,uint256)'(
    target: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  burnWithAllowance(
    from: string,
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  initialize(
    tokenName: string,
    tokenSymbol: string,
    tokenDecimals: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  mint(
    target: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  setAllowance(
    from: string,
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    getImplementation(overrides?: CallOverrides): Promise<string>;

    nominateNewOwner(newNominatedOwner: string, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceNomination(overrides?: CallOverrides): Promise<void>;

    simulateUpgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;

    upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;

    getAssociatedSystem(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { addr: string; kind: string }>;

    initOrUpgradeNft(
      id: BytesLike,
      name: string,
      symbol: string,
      uri: string,
      impl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initOrUpgradeToken(
      id: BytesLike,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      impl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    registerUnmanagedSystem(
      id: BytesLike,
      endpoint: string,
      overrides?: CallOverrides
    ): Promise<void>;

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    'burn(uint256)'(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'burn(address,uint256)'(
      target: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    burnWithAllowance(
      from: string,
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      tokenName: string,
      tokenSymbol: string,
      tokenDecimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    mint(target: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    setAllowance(
      from: string,
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'Upgraded(address,address)'(self?: string | null, implementation?: null): UpgradedEventFilter;
    Upgraded(self?: string | null, implementation?: null): UpgradedEventFilter;

    'AssociatedSystemSet(bytes32,bytes32,address,address)'(
      kind?: BytesLike | null,
      id?: BytesLike | null,
      proxy?: null,
      impl?: null
    ): AssociatedSystemSetEventFilter;
    AssociatedSystemSet(
      kind?: BytesLike | null,
      id?: BytesLike | null,
      proxy?: null,
      impl?: null
    ): AssociatedSystemSetEventFilter;

    'Approval(address,address,uint256)'(
      owner?: string | null,
      spender?: string | null,
      amount?: null
    ): ApprovalEventFilter;
    Approval(owner?: string | null, spender?: string | null, amount?: null): ApprovalEventFilter;

    'Transfer(address,address,uint256)'(
      from?: string | null,
      to?: string | null,
      amount?: null
    ): TransferEventFilter;
    Transfer(from?: string | null, to?: string | null, amount?: null): TransferEventFilter;
  };

  estimateGas: {
    acceptOwnership(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    getImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      newNominatedOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceNomination(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    simulateUpgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getAssociatedSystem(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    initOrUpgradeNft(
      id: BytesLike,
      name: string,
      symbol: string,
      uri: string,
      impl: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    initOrUpgradeToken(
      id: BytesLike,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      impl: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    registerUnmanagedSystem(
      id: BytesLike,
      endpoint: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    'burn(uint256)'(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    'burn(address,uint256)'(
      target: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    burnWithAllowance(
      from: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    initialize(
      tokenName: string,
      tokenSymbol: string,
      tokenDecimals: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      target: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    setAllowance(
      from: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>;

    getImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      newNominatedOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceNomination(overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>;

    simulateUpgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getAssociatedSystem(id: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initOrUpgradeNft(
      id: BytesLike,
      name: string,
      symbol: string,
      uri: string,
      impl: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    initOrUpgradeToken(
      id: BytesLike,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      impl: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    registerUnmanagedSystem(
      id: BytesLike,
      endpoint: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'burn(uint256)'(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    'burn(address,uint256)'(
      target: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    burnWithAllowance(
      from: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    initialize(
      tokenName: string,
      tokenSymbol: string,
      tokenDecimals: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      target: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAllowance(
      from: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
