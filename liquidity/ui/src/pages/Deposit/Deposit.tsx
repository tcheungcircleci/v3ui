import { Box, Divider, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { useParams } from '@snx-v3/useParams';
import { FC } from 'react';
import { DepositForm } from '../../components/Accounts/Deposit';
import { BorderBox } from '@snx-v3/BorderBox';
import { useCollateralType } from '@snx-v3/useCollateralTypes';
import { PoolBox } from '@snx-v3/PoolBox';
import { CollateralIcon } from '@snx-v3/icons';
import { HomeLink } from '@snx-v3/HomeLink';
import { WithdrawIncrease } from '@snx-v3/WithdrawIncrease';
import { isBaseAndromeda } from '@snx-v3/isBaseAndromeda';
import { Network, useNetwork } from '@snx-v3/useBlockchain';

function DepositUi({
  collateralDisplaySymbol,
  PoolBox,
  DepositForm,
  network,
}: {
  collateralDisplaySymbol?: string;
  DepositForm: FC;
  PoolBox: FC;
  network?: Network | null;
}) {
  return (
    <Flex height="100%" flexDirection="column">
      <WithdrawIncrease />
      <HomeLink />
      <Flex alignItems="flex-end" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
        <Box flexGrow={1} mr={12}>
          <Flex mb={2}>
            <Flex alignItems="center">
              <Box
                mr={2}
                bg="linear-gradient(180deg, #08021E 0%, #1F0777 146.21%)"
                p="3px"
                borderRadius="50px"
              >
                <CollateralIcon
                  width="30px"
                  height="30px"
                  symbol={collateralDisplaySymbol || 'SNX'}
                  fill="#0B0B22"
                  color="#00D1FF"
                />
              </Box>
              <Heading>{collateralDisplaySymbol} Vault</Heading>
            </Flex>
          </Flex>
          <Text color="gray.500" fontSize="sm">
            {isBaseAndromeda(network?.id, network?.preset)
              ? 'Deposit to '
              : 'Deposit your collateral to borrow snxUSD and '}
            contribute to the network collateral. If you have never staked on Synthetix before,
            please review{' '}
            <Link
              color="cyan.500"
              href={
                isBaseAndromeda(network?.id, network?.preset)
                  ? 'https://docs.synthetix.io/v/v3/for-liquidity-providers/base-lp-guide'
                  : 'https://docs.synthetix.io/'
              }
              target="_blank"
            >
              the documentation
            </Link>
            .
          </Text>
        </Box>
      </Flex>
      <Divider my={8} bg="gray.900" />
      <Flex alignItems="stretch" flexWrap={{ base: 'wrap', md: 'nowrap' }} gap={4}>
        <BorderBox flexGrow={1} p={4} flexDirection="column">
          <Heading fontSize="xl" color="gray.50">
            Deposit Collateral
          </Heading>
          <Text fontSize="sm" color="gray.500" my={1}>
            Take an interest-free loan against your collateral. This increases your debt and
            decreases your C-Ratio.
          </Text>
          <Heading mt={4} mb={2} size="sm" color="gray.50">
            Deposit {collateralDisplaySymbol}
          </Heading>
          <DepositForm />
        </BorderBox>
        <Box maxW={{ base: 'full', md: '400px' }} width="full">
          <PoolBox />
        </Box>
      </Flex>
    </Flex>
  );
}

export function Deposit() {
  const params = useParams();

  const { data: collateralType } = useCollateralType(params.collateralSymbol);
  const { network } = useNetwork();

  return (
    <DepositUi
      collateralDisplaySymbol={collateralType?.displaySymbol}
      DepositForm={DepositForm}
      PoolBox={PoolBox}
      network={network}
    />
  );
}
