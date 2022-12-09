import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { hardhat } from 'wagmi/chains'

const { chains, provider, webSocketProvider } = configureChains([hardhat], [
  publicProvider(),
])

const { connectors } = getDefaultWallets({
  appName: 'CryptoDevs DAO',
  chains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }
