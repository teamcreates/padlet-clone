import React, { useState } from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";

export default function Home() {
  const [Cards, setCards] = useState([]);
  const [CmakebarState, setCmakebarState] = useState(false);
  const [CbarInputValue, setCbarInputValue] = useState({
    title: "",
    content: "",
  });

  function cardmakebar() {
    if (CmakebarState === true) {
      setCmakebarState(false);
    } else if (CmakebarState === false) {
      setCmakebarState(true);
    }
  }

  function handleNewCard() {
    if (CbarInputValue === "") return;

    setCards([...Cards, CbarInputValue]);
    cardmakebar();
    setCbarInputValue({
      title: "",
      content: "",
    });
  }

  return (
    <div className="m-0 p-0 w-full h-full">
      <Head>
        <title>Create padlet clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="rounded-lg fixed z-10 w-full top-0 bg-orange-500 py-3 shadow-sms">
        <p className=" ml-2 text-xs text-orange-400">Company</p>
        <div className="ml-20">
          <h1 className="text-2xl mt-7 font-bold text-white">
            Title this is the title
          </h1>
          <h2 className="text-slate-100">Descriptio</h2>
        </div>
      </section>
      <section className=" fixed right-0 bottom-0">
        {CmakebarState && (
          <div className="fixed right-20 bottom-10 bg-slate-900 p-5 pb-10 opacity-95 rounded-xl">
            <input
              className="block opacity-100 rounded-sm mb-4 text-center"
              placeholder="title for a new card"
              value={CbarInputValue.title}
              onChange={(e) => {
                setCbarInputValue({
                  title: e.target.value,
                  content: CbarInputValue.content,
                });
              }}
            ></input>
            <textarea
              rows="5"
              className="block opacity-100 resize-none rounded-sm"
              placeholder="content for a new card"
              value={CbarInputValue.content}
              onChange={(e) => {
                setCbarInputValue({
                  title: CbarInputValue.title,
                  content: e.target.value,
                });
              }}
            ></textarea>
            <button
              className="bg-red-400 text-white w-full mt-4"
              onClick={handleNewCard}
            >
              save
            </button>
          </div>
        )}
        <button
          className="bg-red-400 fixed right-0 bottom-0 m-5 p-4 px-6 text-white rounded-full font-bold transition-all hover:bg-red-500 "
          onClick={cardmakebar}
        >
          +
        </button>
      </section>

      <section className="inline-block mt-32  z-10 mb-4 w-full">
        {Cards.map((card, i) => (
          <div key={i}className="rounded-lg align-top inline-block bg-white m-1 cardc">
            <h1 className="font-bold px-2 pt-2 break-words min-w-xs max-w-xs">
              {card.title}
            </h1>
            <p className="pb-3 px-2 break-words max-w-xs">{card.content}</p>
            <style jsx>{`
              .cardc {
                max-width: 17.5rem;
                min-width: 17.5rem;
              }
            `}</style>
          </div>
        ))}
      </section>
    </div>
  );
}
