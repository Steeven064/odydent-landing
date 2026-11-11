import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const states = [
  { face: "Oclusal", dx: "Caries Oclusal Profunda", price: "$65 USD", color: "#ef4444" },
  { face: "Sano", dx: "Sin hallazgos", price: "$0 USD", color: "#16a34a" },
  { face: "Restaurado", dx: "Resina compuesta", price: "$40 USD", color: "#3b82f6" },
];

export default function Odontogram() {
  const [i, setI] = useState(0);
  const s = states[i];
  return (
    <section id="odontograma" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="grid items-center gap-10 rounded-[2rem] bg-brand-500 p-8 text-white md:grid-cols-[1.1fr_1fr] md:p-12">
          <div>
            <span className="rounded-lg bg-white/20 px-3 py-1 text-[11px] font-bold">INNOVACIÓN EXCLUSIVA ODYDENT</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight">Odontograma 100% Interactivo: Diagnósticos claros que los pacientes entienden y aprueban</h2>
            <p className="my-5 text-sm text-white/90">Marca caries, endodoncias, implantes y coronas con simples clics en cada cara dental. El odontograma genera automáticamente el presupuesto estimado, reduciendo el tiempo frente a la pantalla y aumentando la confianza del paciente.</p>
            <ul className="flex flex-wrap gap-5 text-xs">
              <li className="flex items-center gap-1.5"><Check size={16} /> Compatible con Tablets &amp; Lápiz Óptico</li>
              <li className="flex items-center gap-1.5"><Check size={16} /> Código Internacional FDI y Universal</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 text-ink shadow-2xl">
            <div className="mb-4 flex items-center justify-between font-bold">Pieza 46 (Molar Inferior)<em className="rounded-lg bg-brand-50 px-2.5 py-1 text-[11px] not-italic text-brand-500">Cara Oclusal</em></div>
            <div className="rounded-2xl bg-slate-50 p-5 text-center text-xs text-slate-500">
              Vestibular
              <motion.button
                onClick={() => setI((i + 1) % states.length)}
                whileTap={{ scale: 0.9 }}
                animate={{ backgroundColor: s.color }}
                className="mx-auto my-3 block size-20 cursor-pointer rounded-2xl text-sm font-bold text-white"
                aria-label="Cambiar estado de la cara oclusal"
              >
                {s.face}
              </motion.button>
              Lingual (Sano)
              <p className="mt-3">Haz clic en una cara para asignar o actualizar el estado clínico</p>
            </div>
            <div className="mt-4 flex items-end justify-between text-xs">
              <div>Diagnóstico:
                <AnimatePresence mode="wait">
                  <motion.b key={s.dx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }} className="block text-base text-red-500">{s.dx}</motion.b>
                </AnimatePresence>
              </div>
              <strong className="text-xl">{s.price}</strong>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
