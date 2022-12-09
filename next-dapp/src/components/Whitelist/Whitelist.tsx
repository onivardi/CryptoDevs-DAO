import React from 'react'
import { WhitelistContent } from './WhitelistContent'

type Props = {}

export const Whitelist = (props: Props) => {
  return (
    <section className="section">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop">
                    <WhitelistContent />
                </div>
            </div>
        </div>
    </section>
  )
}


