import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  ["¿Los datos de mis pacientes y radiografías están protegidos por ley?", "Sí. La información se almacena cifrada (AES-256), con copias de respaldo diarias y cumplimiento de normativas de protección de datos."],
  ["¿El sistema está aprobado por el MSP?", "La historia clínica digital sigue el formato del formulario 033 del Ministerio de Salud Pública, incluyendo el odontograma oficial."],
  ["¿Necesito tarjeta de crédito para la prueba?", "No. Puedes probar todas las funciones durante 30 días sin ingresar datos de pago."],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <Reveal className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-500">Respuestas claras</span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Preguntas Frecuentes de Odontólogos</h2>
      </Reveal>
      <div className="mt-10 space-y-3">
        {faqs.map(([q, a], i) => (
          <div key={q} className="rounded-2xl border border-brand-100 bg-white">
            <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold">
              {q}
              <motion.span animate={{ rotate: open === i ? 180 : 0 }}><ChevronDown size={18} className="text-slate-400" /></motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-5 text-sm text-slate-500">
                  <span className="block pb-5">{a}</span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
