"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function askAI() {
    setAnswer("Loading...");

    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setAnswer(data.answer ?? "Error");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans text-black p-20">
      <main style={{ padding: 40 }}>
        <div  className="flex-col border-black items-center justify-center p-20">

        </div>
        <h1>Amer  AI Chat</h1>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}

          placeholder="Type your question here, And Amer AI will answer you"
          className="w-120 h-20 border-4 border-indigo-500 border-double rounded-lg p-2 mb-4 text-violet-700 caret-pink-500"
        />
        <div className="mb-4 p-2 items-center justify-center ">
          <button className="border-4 border-indigo-500 border-double rounded-lg p-2 bg-sky-500 hover:bg-indigo-500 hover:border-sky-500 w-30" onClick={askAI}>Ask</button>
        </div>
        <div>
          {answer && (
            <div className="mt-4 p-3 rounded bg-gray-100 text-black">
              {answer}
            </div>
        )}
        </div>
        {/* <h3>Answer:</h3>
        <pre>{answer}</pre> */}
      </main>
    </div>
  );
}
