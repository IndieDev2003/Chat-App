import React from 'react'
import { useState, useEffect } from 'react'
import { useChatContext } from 'stream-chat-react'

import {SearchIcon} from '../assets'

const ChannelSearch = () => {

    const [query,setQuery] =useState('');
    const [loading,setLoading] =useState(false);

    const getChannels=async(text)=>{
        try{
            //TODO: fetch chanels
        }catch(error){
            setQuery('');
        }
    }

    const onSearch = (event)=>{
        event.preventDefault();
        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value)
    }

  return (
    <div className='channel-search__container'>
        <div className='channel-search__input__wrapper'>
            <div className='channel-search__input__icon'>
                <SearchIcon/>
            </div>
            <input className='channel-search__input__text' type="" placeholder='Search' value={query} onChange={onSearch}/>
        </div>
    </div>
  )
}

export default ChannelSearch