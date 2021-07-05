import React from 'react'
import Bell from '../Icons/Bell'

export default function(){
    return(
        <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">View notifications</span>
            <Bell/>
        </button>

    )
}