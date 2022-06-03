import React from 'react';
import "tailwindcss/tailwind.css";

export default function Card(props) {
    return(
        <div className='rounded-lg inline-block bg-white min-w-xs m-1 max-w-sm'>
            <p className='pb-3 px-2 pt-2 break-words max-w-xs'>{props.content}</p>
        </div>
    )
}