import React from 'react';

type WhitelistProps = {
    numJoined: string | undefined;
    handleJoin: any ;
}

export function WhitelistContent({ numJoined, handleJoin }: WhitelistProps) {
    
    return (
        <div className="box">
            <div className="content has-text-centered">
                <p className='title is-4'>Joined to the Whitelist</p>
                <p className='is-size-3'>{numJoined}/10</p>
                <button className="button is-primary" disabled={!handleJoin} onClick={handleJoin}>Join the Whitelist</button>
            </div>
        </div>
    );
}
