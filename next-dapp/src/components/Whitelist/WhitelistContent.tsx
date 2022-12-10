import { PrepareWriteContractResult } from '@wagmi/core';
import React, { MouseEventHandler } from 'react';


type WhitelistProps = {
    numJoined: string | undefined;
    handleJoin:  any;
    isConnected: boolean;
    isWhitelisted: boolean | undefined
}

export function WhitelistContent({ numJoined, handleJoin, isConnected, isWhitelisted }: WhitelistProps) {
    
    function TextRender() {
        if (!isConnected) {
            return 'Connect your Wallet'
        } else if (isWhitelisted) {
            return 'Your are In!'
        } else if(isConnected){
            return 'Join the Whitelist'
        }
    }


    return (
        <div className="box py-6">
            <div className="content has-text-centered my-6">
                <p className='title is-4'>Joined to the Whitelist</p>
                <p className='is-size-3'>{numJoined}/10</p>
                <button className="button is-primary" onClick={() =>handleJoin} disabled={!handleJoin || isWhitelisted}> {TextRender()}</button>

            </div>
        </div>
    );
}
