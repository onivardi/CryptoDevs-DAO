
import React from 'react'
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { whitelistABI, whitelistADDRESS } from '../../../CONSTANTS'
import { WhitelistContent } from './WhitelistContent'



export const Whitelist = () => {


  const account = useAccount()
  

  const whitelistContract = {
    address: whitelistADDRESS,
    abi: whitelistABI
  }


  const { data: numAddrWhitelisted } = useContractRead({
    ...whitelistContract,
    functionName: 'numAddressesWhitelisted',
    onSettled(numAddrWhitelisted: string | undefined, error) {

    },
    watch: true
  })
  const { data: isWhitelisted } = useContractRead({
    ...whitelistContract,
    functionName: 'whitelistedAddress',
    args: account.address ? [account.address] : undefined,
    watch: true
  })

  const { config } = usePrepareContractWrite({
    ...whitelistContract,
    functionName: 'addAddressToWhitelist'
  })

  const { write } = useContractWrite(config)
  
  

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop">
            <WhitelistContent numJoined={numAddrWhitelisted} handleJoin={write} isConnected={account.isConnected} isWhitelisted={isWhitelisted}/>

          </div>
        </div>
      </div>
    </section>
  )
}


