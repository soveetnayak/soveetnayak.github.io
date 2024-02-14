"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Wanna lose your kissing privileges?",
      "Think again!",
      "Last chance!",
      "Pakkkaaaa?",
      "You might regret this!",
      "I'll take back my denim shirt!",
      "Are you absolutely certain?",
      "Silent treatment incoming for you!",
      "Have a heart!",
      "Don't be so cold!",
      "You will never find another bestestcutesthottestnotfunnysexiest valentine!",
      "Testimony that you have other boyfriends?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "PLEASEEEEE",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://media1.tenor.com/m/Cqro9GuNTNQAAAAC/mochi-mochi-peach-cat-gif-mochi-cat.gif" />
        <div className="text-2xl my-4"> Ps- Had to put your first response here.</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://media.tenor.com/VaoZeZTg5J4AAAAi/mochicat-love.gif" />
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
