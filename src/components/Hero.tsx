import { motion } from "motion/react";
import { Play, Rocket } from "lucide-react";
import { SIGNUP_URL } from "../App";

export default function Hero() {
  return (
    <section className="bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-brand-50),white)] px-6 pb-16 pt-16 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
      >
        El software integral que moderniza y hace{" "}
        <span className="text-brand-500">rentable tu clínica odontológica</span>
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}>
        <p className="mx-auto mt-5 max-w-xl text-slate-500">
          Gestiona citas con recordatorios, odontograma interactivo y fichas clínicas digitales en base al formulario 033 del MSP. Diseñado exclusivamente para dentistas y clínicas dentales de alto nivel.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={SIGNUP_URL} className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600">
            <Rocket size={18} /> Comenzar Prueba Gratis (30 Días)
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-brand-100 bg-white px-6 py-3 font-semibold text-brand-500 transition hover:bg-brand-50">
            <Play size={18} /> Ver Demostración
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mx-auto mt-14 max-w-4xl"
      >
        <motion.img
          src="/img-dashboard.png"
          alt="Panel de OdyDent: agenda del día, pacientes activos, citas e ingresos del mes"
          width={1104}
          height={526}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="h-auto w-full rounded-2xl border border-brand-100 shadow-2xl shadow-brand-500/20"
        />
      </motion.div>
    </section>
  );
}
