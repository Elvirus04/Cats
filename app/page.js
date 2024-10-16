"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [surname, setSurname] = useState("Patrick");
  const [chiffre, setChiffre] = useState(0);
  const [isMarcelino, setIsMarcelino] = useState(false);

  function counter1() {
    setChiffre(chiffre + 11);
  }

  function counter2() {
    if (chiffre > 0) {
      setChiffre(chiffre - 5);
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Le royaume des chats</h1>
        <h1>Counter {chiffre}</h1>
        <button className="p-2 bg-blue-300" onClick={counter1}>
          + 10
        </button>
        <button className="p-2 bg-blue-300" onClick={counter2}>
          - 5
        </button>
        {isMarcelino && (
          <>
            <h1>Marcelino apparait</h1>
          </>
        )}
      </main>
    </div>
  );
}
