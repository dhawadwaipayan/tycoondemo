"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

type TypewriterProps = {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  onComplete?: () => void;
  as?: "h1" | "h2" | "p" | "span" | "div";
};

export function Typewriter({
  text,
  className,
  speed = 38,
  delay = 200,
  showCursor = true,
  onComplete,
  as: Tag = "span",
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(intervalId);
          setDone(true);
          onCompleteRef.current?.();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return (
    <Tag className={clsx(className)}>
      {displayed}
      {showCursor && !done && (
        <motion.span
          aria-hidden
          className="inline-block w-[2px] h-[0.85em] bg-ink/70 ml-0.5 align-[-0.1em]"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </Tag>
  );
}

/** Cycles typewriter text for input placeholders */
export function useTypewriterPlaceholder(
  phrases: string[],
  options?: {
    speed?: number;
    pause?: number;
    deleteSpeed?: number;
    startDelay?: number;
    enabled?: boolean;
  }
) {
  const speed = options?.speed ?? 42;
  const pause = options?.pause ?? 1800;
  const deleteSpeed = options?.deleteSpeed ?? 22;
  const startDelay = options?.startDelay ?? 600;
  const enabled = options?.enabled ?? true;

  const [placeholder, setPlaceholder] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "typing" | "pausing" | "deleting">("idle");

  useEffect(() => {
    if (!enabled) {
      setPlaceholder("");
      setPhase("idle");
      return;
    }

    const phrase = phrases[phraseIndex % phrases.length] ?? "";
    let timeoutId: ReturnType<typeof setTimeout>;

    if (phase === "idle") {
      timeoutId = setTimeout(() => setPhase("typing"), startDelay);
    } else if (phase === "typing") {
      if (placeholder.length < phrase.length) {
        timeoutId = setTimeout(() => {
          setPlaceholder(phrase.slice(0, placeholder.length + 1));
        }, speed);
      } else {
        timeoutId = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeoutId = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (placeholder.length > 0) {
        timeoutId = setTimeout(() => {
          setPlaceholder(placeholder.slice(0, -1));
        }, deleteSpeed);
      } else {
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeoutId);
  }, [phase, placeholder, phraseIndex, phrases, speed, pause, deleteSpeed, startDelay, enabled]);

  return placeholder;
}
