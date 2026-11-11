import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { SIGNUP_URL } from "../App";

const links = [
  ["Módulos", "#modulos"],
  ["Características", "#caracteristicas"],
  ["Odontograma", "#odontograma"],
  ["Precios", "#precios"],
  ["Preguntas Frecuentes", "#faq"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-brand-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-extrabold text-brand-500">
          <span className="grid size-8 place-items-center rounded-lg bg-brand-500 text-white">◔</span>
          OdyDent
        </a>
        <nav className="hidden gap-7 text-sm font-medium md:flex">
          {links.map(([t, h]) => (
            <a key={h} href={h} className="transition-colors hover:text-brand-500">{t}</a>
          ))}
        </nav>
        <a href={SIGNUP_URL} className="hidden rounded-xl bg-brand-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-brand-600 md:block">
          Prueba Gratuita 30 Días
        </a>
        <button className="md:hidden" aria-label="Menú" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-brand-100 bg-white md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              {links.map(([t, h]) => (
                <a key={h} href={h} onClick={() => setOpen(false)} className="font-medium">{t}</a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
