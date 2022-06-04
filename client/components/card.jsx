import React from "react";
import "tailwindcss/tailwind.css";

export default function Card(props) {
  return (
    <div className="rounded-lg inline-block bg-white m-1 max-w-xs cardc">
      <h1 className="font-bold px-2 pt-2 break-words min-w-xs max-w-xs">
        {props.title}
      </h1>
      <p className="pb-3 px-2 break-words max-w-xs">{props.content}</p>
      <style jsx>{`
        .cardc {
            max-width: 17.5rem;
            min-width: 17.5rem;
        }
      `}</style>
    </div>
  );
}