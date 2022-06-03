import React from 'react';
import "tailwindcss/tailwind.css";

export default function Card(props) {
    return(
        <div className='rounded-lg bg-white cardc break-words ustify-center items-center h-screen'>
            <p className=' m-1'>{props.content}</p>
            <style jsx>{`
          .cardc {
            max-width: 20rem;
            min-width: 15rem;
            margin: 0.3rem;
          }
      `}</style>
        </div>
    )
}