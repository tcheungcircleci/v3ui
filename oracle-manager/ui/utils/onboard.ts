import { init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import { NETWORKS } from '@snx-v3/useBlockchain';

export const networks = NETWORKS.map((n) => ({
  id: n.id,
  token: n.token,
  label: n.label,
  rpcUrl: n.rpcUrl(),
}));

export const onboard = init({
  wallets: [injectedModule({})],
  chains: [...networks],
});
