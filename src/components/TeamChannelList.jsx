import React from 'react'

import { AddChannel } from '../assets'

const TeamChannelList = ({children,error =false, loading,type}) => {

    if(error){
        return type==='team' ? (
            <div className='team-channel-list'>
                <p className='team-channel-list__message'>
                    Connection Error, please wait a momment and try again ! Thank You
                </p>
            </div>
        ) :null
    }

    if(loading){
        return (
            <div className='team-channel-list'>
            <p className='team-channel-list__message loading'>
                {type === 'team' ? 'Channels' : 'Massages'} loading......
            </p>
        </div>
        )
    }

  return (
    <div className='team-channel-list'>
        <div className='team-channel-list__header'>
            <p className='team-channel-list__header__title'> 
            {type === 'team' ? 'Channels' : 'Direct Massages'}
            </p>
            { /*Button -add Channels */}
        </div>
        {children}

    </div>
  )
}

export default TeamChannelList