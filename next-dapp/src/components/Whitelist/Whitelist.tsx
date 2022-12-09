import React from 'react'

type Props = {}

export const Whitelist = (props: Props) => {
  return (
    <section className="section">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop">
                    <div className="box">
                        <div className="content has-text-centered">
                            <p className='title is-4'>Joined to the Whitelist</p>
                            <p className='is-size-3'>3/10</p>
                            <button className="button is-primary">Join the Whitelist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}