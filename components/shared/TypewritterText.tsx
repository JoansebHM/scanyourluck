"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  creditName?: string;
}

function TypewriterTextInner({
  text,
  speed = 400,
  creditName = "Pedro Herrera",
}: TypewriterTextProps) {
  const [displayedWords, setDisplayedWords] = useState(0);
  const decodedText = decodeURIComponent(text);
  const allWords = decodedText.split(" ");

  const searchParams = useSearchParams();
  const sender = searchParams.get("sender") || "Alguien";

  const attributionWords = [
    "Pensado",
    "y",
    "generado",
    "con",
    "amor",
    "por",
    ...sender.split(" "),
  ];

  const totalWords = allWords.length + attributionWords.length + 2;

  useEffect(() => {
    if (displayedWords < totalWords) {
      const timeout = setTimeout(() => {
        setDisplayedWords((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [displayedWords, totalWords, speed]);

  const lines = allWords.reduce((acc: string[][], word, index) => {
    const lineIndex = Math.floor(index / 2);
    if (!acc[lineIndex]) {
      acc[lineIndex] = [];
    }
    acc[lineIndex].push(word);
    return acc;
  }, []);

  let wordCount = 0;

  return (
    <div className="flex flex-col items-start text-white drop-shadow-[0_0_90px_rgba(255,255,255,0.8)] text-6xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold -tracking-wider max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[80%] 2xl:max-w-[80%]">
      <div className="flex items-start w-full">
        <span
          className={`text-primary transition-all duration-1000 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl shrink-0 mr-2 ${
            displayedWords >= 0 ? "opacity-100 blur-none" : "opacity-20 blur-sm"
          }`}
        >
          &ldquo;
        </span>

        <div className="flex flex-col">
          {lines.map((lineWords, lineIndex) => (
            <div key={lineIndex} className="whitespace-nowrap">
              {lineWords.map((word, wordIndex) => {
                const currentWordIndex = wordCount;
                wordCount++;
                const isRevealed = currentWordIndex < displayedWords;
                const isLastWordInText =
                  currentWordIndex === allWords.length - 1;

                return (
                  <span key={wordIndex}>
                    <span
                      className={`transition-all duration-1000 ${
                        isRevealed
                          ? "text-white opacity-100 blur-none"
                          : "text-primary opacity-20 blur-sm"
                      }`}
                    >
                      {word}
                    </span>
                    {wordIndex < lineWords.length - 1 ? " " : ""}
                    {isLastWordInText && (
                      <span
                        className={`text-primary transition-all duration-1000 ${
                          displayedWords >= allWords.length
                            ? "opacity-100 blur-none"
                            : "opacity-20 blur-sm"
                        }`}
                      >
                        {" "} &rdquo;
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs mt-10 2xl:ml-5 italic tracking-normal">
        <span
          className={`text-white/40 transition-all duration-1000 ${
            displayedWords >= allWords.length + 1
              ? "opacity-100 blur-none"
              : "opacity-20 blur-sm"
          }`}
        >
          -{" "}
        </span>
        {attributionWords.map((word, index) => {
          const currentWordIndex = allWords.length + 1 + index;
          const isRevealed = currentWordIndex < displayedWords;
          const nameWords = creditName.split(" ");
          const isName = nameWords.includes(word);

          return (
            <span key={index}>
              <span
                className={`transition-all duration-500 ${
                  isRevealed
                    ? `${isName ? "" : "text-white/40 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"} opacity-100 blur-none`
                    : "text-primary opacity-20 blur-sm"
                }`}
              >
                {word}
              </span>
              {index < attributionWords.length - 1 ? " " : ""}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function TypewriterText(props: TypewriterTextProps) {
  return <TypewriterTextInner key={props.text} {...props} />;
}
