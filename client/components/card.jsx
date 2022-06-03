import React from 'react';
import "tailwindcss/tailwind.css";

export default function Card(props) {
    return(
        <div className='rounded-lg bg-white ph-2 px-2 pb-2 m-5 cardc truncate'>
            <p className='m-10 break-words'>{props.content}</p>
            <style jsx>{`
          .cardc {
            max-width: 40rem;
            min-width: 20rem;
            text-align: center;
          }
      `}</style>
        </div>
    )
}