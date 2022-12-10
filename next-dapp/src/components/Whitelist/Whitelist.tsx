import React from 'react'
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { whitelistABI, whitelistADDRESS } from '../../../CONSTANTS'
import { WhitelistContent } from './WhitelistContent'



export const Whitelist = () => {

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

  const { config } = usePrepareContractWrite({
    ...whitelistContract,
    functionName: 'addAddressToWhitelist'
  })

  const { data, isSuccess, write, writeAsync } = useContractWrite(config)
  {console.log(write)}
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop">
            <WhitelistContent numJoined={numAddrWhitelisted} handleJoin={writeAsync}/>
            {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}


