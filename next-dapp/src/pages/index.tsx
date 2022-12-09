import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'


import { Account, Navbar } from '../components'

function Page() {
  const { isConnected } = useAccount()

  return (
    <>
      <Navbar />
      
    </>
  )
}

export default Page
