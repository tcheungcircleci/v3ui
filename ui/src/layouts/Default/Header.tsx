import logo from './logo.png';
import logomark from './logomark.svg';
import kwenta from './kwenta.svg';
import lyra from './lyra.svg';
import thales from './thales.svg';
import { CheckIcon, ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom';
import { NetworkController } from '../../components/NetworkController';
import { useEffect } from 'react';
import { prettyString } from '@snx-v3/format';
import { useAccounts } from '@snx-v3/useAccounts';
import { AccountsSelector } from '@snx-v3/AccountsSelector';

function ExternalLinks() {
  return (
    <>
      <a href="https://kwenta.eth.limo" target="_blank" rel="noreferrer">
        <Flex mb="3" cursor="pointer" alignItems="center">
          <Image src={kwenta} alt="Kwenta" width="28px" height="28px" />
          <Box pl="3">
            <Text fontWeight="500">Kwenta</Text>
            <Text fontSize="xs">Trade perpetual futures with up to 10x leverage.</Text>
          </Box>
        </Flex>
      </a>
      <a href="https://lyra.finance" target="_blank" rel="noreferrer">
        <Flex mb="3" cursor="pointer" alignItems="center">
          <Image src={lyra} alt="Lyra" mx="1" width="21px" height="21px" />
          <Box pl="3">
            <Text fontWeight="500">Lyra</Text>
            <Text fontSize="xs">The first completely decentralized options protocol.</Text>
          </Box>
        </Flex>
      </a>
      <a href="https://thalesmarket.io" target="_blank" rel="noreferrer">
        <Flex cursor="pointer" alignItems="center">
          <Image src={thales} alt="Thales" width="28px" height="28px" />
          <Box pl="3">
            <Text fontWeight="500">Thales</Text>
            <Text fontSize="xs">A parimutuel markets protocol for price, sports, and more.</Text>
          </Box>
        </Flex>
      </a>
    </>
  );
}

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const { id } = useParams();
  const { data: accounts = [] } = useAccounts();

  useEffect(() => {
    onClose();
  }, [location, onClose]);

  return (
    <>
      <Container mb="8" maxW="1024px" py="4">
        <Flex alignItems="center" gap="2">
          <Box display={['none', 'none', 'inline-block']}>
            <Link to="/" as={RouterLink} _focus={{ boxShadow: 'none' }}>
              <Image src={logo} alt="Synthetix" width={200} height={14.5} />
            </Link>
          </Box>
          <Box display={['inline-block', 'inline-block', 'none']}>
            <Link to="/" as={RouterLink} _focus={{ boxShadow: 'none' }}>
              <Image src={logomark} alt="Synthetix" height="20px" />
            </Link>
          </Box>
          <Spacer />
          <Box display={['none', 'none', 'none', 'flex']}>
            <Link
              to="/"
              as={RouterLink}
              _focus={{ boxShadow: 'none' }}
              mx="3"
              fontWeight="semibold"
            >
              Deposit
            </Link>
            <Link
              _focus={{ boxShadow: 'none' }}
              mx="3"
              fontWeight="semibold"
              href="https://governance.synthetix.io/"
              isExternal
            >
              DAO
            </Link>
            <Link
              _focus={{ boxShadow: 'none' }}
              mx="3"
              fontWeight="semibold"
              href="https://snx-v3-docs.vercel.app/"
              isExternal
            >
              Developers
            </Link>
            <Popover trigger="hover" variant="responsive">
              <PopoverTrigger>
                <Link
                  _focus={{ boxShadow: 'none' }}
                  _hover={{ textDecoration: 'none' }}
                  fontWeight="semibold"
                  display="flex"
                  alignItems="center"
                  mx="3"
                >
                  Trade <ChevronDownIcon />
                </Link>
              </PopoverTrigger>
              <PopoverContent border="none" maxWidth="260px">
                <PopoverBody
                  bg="black"
                  color="white"
                  border="1px solid"
                  borderColor="gray.900"
                  borderRadius="md"
                  p="5"
                >
                  <ExternalLinks />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>

          <Spacer />

          <AccountsSelector />

          <Box>
            <NetworkController />
          </Box>
          <IconButton
            display={['inline-block', 'inline-block', 'inline-block', 'none']}
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            colorScheme="gray"
            onClick={onOpen}
            ml="4"
            size="sm"
          />
        </Flex>
      </Container>

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent background="black">
          <DrawerCloseButton />
          <DrawerHeader>
            <Link to="/" as={RouterLink} _focus={{ boxShadow: 'none' }}>
              <Image transform="translateY(-2px)" src={logomark} alt="Synthetix" height="20px" />
            </Link>
          </DrawerHeader>
          <DrawerBody>
            {id && (
              <Menu>
                <MenuButton
                  size="sm"
                  as={Button}
                  variant="outline"
                  rightIcon={<ChevronDownIcon />}
                  w="100%"
                  maxW="180px"
                  mb="2"
                >
                  {id ? `Account #${prettyString(id, 3, 3)}` : 'Create Account'}
                </MenuButton>
                <MenuList fontSize="xs" px="2" bg="black" border="1px solid rgba(255,255,255,0.33)">
                  {accounts.map((account) => {
                    const isCurrentAccount = id === account.toString();
                    const menuItem = (
                      <MenuItem
                        key={account}
                        _hover={{ bg: 'whiteAlpha.200' }}
                        _focus={{ bg: 'whiteAlpha.200' }}
                        _active={{ bg: 'whiteAlpha.200' }}
                      >
                        <Flex width="100%" alignItems="center">
                          {isCurrentAccount && <CheckIcon marginRight={1} />}
                          {account}
                        </Flex>
                      </MenuItem>
                    );

                    return isCurrentAccount ? (
                      menuItem
                    ) : (
                      <RouterLink key={account} to={`/accounts/${account}`}>
                        {menuItem}
                      </RouterLink>
                    );
                  })}
                  <MenuItem
                    _hover={{ bg: 'whiteAlpha.200' }}
                    _focus={{ bg: 'whiteAlpha.200' }}
                    _active={{ bg: 'whiteAlpha.200' }}
                  >
                    <Link
                      as={RouterLink}
                      to="/accounts/create"
                      _focus={{ boxShadow: 'none' }}
                      _hover={{ textDecoration: 'none' }}
                      fontWeight="semibold"
                    >
                      Create new account
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
            <Box mb="3">
              <Link to="/" as={RouterLink} _focus={{ boxShadow: 'none' }} fontWeight="semibold">
                Deposit
              </Link>
            </Box>
            <Box mb="3">
              <Link
                _focus={{ boxShadow: 'none' }}
                fontWeight="semibold"
                href="https://governance.synthetix.io/"
                isExternal
              >
                DAO
              </Link>
            </Box>
            <Box mb="3">
              <Link
                _focus={{ boxShadow: 'none' }}
                fontWeight="semibold"
                href="https://snx-v3-docs.vercel.app/"
                isExternal
              >
                Developers
              </Link>
            </Box>
            <Text
              opacity="0.8"
              fontWeight="semibold"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.75px"
              mb="2"
              mt="5"
            >
              Trade
            </Text>
            <ExternalLinks />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
