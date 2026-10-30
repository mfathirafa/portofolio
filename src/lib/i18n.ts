import { useSyncExternalStore } from "react";

export type Lang = "en" | "id";
export type T = { en: string; id: string };

const KEY = "lang";
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot(): Lang {
  try {
    const s = localStorage.getItem(KEY);
    if (s === "id" || s === "en") return s;
  } catch {}
  return navigator.language.toLowerCase().startsWith("id") ? "id" : "en";
}

const getServerSnapshot = (): Lang => "en";

export function useLang() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setLang = (l: Lang) => {
    try {
      localStorage.setItem(KEY, l);
    } catch {}
    listeners.forEach((f) => f());
  };
  return { lang, setLang };
}

export function useL() {
  const { lang } = useLang();
  return (t: T) => t[lang];
}