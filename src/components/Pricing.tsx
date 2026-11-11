import { useState } from "react";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import Reveal from "./Reveal";
import { SIGNUP_URL } from "../App";

type Plan = { name: string; desc: string; monthly: number; vat: boolean; pro?: boolean; features: string[]; off?: string[]; note: string; cta: string };

const plans: Plan[] = [
  { name: "Plan Gratuito", desc: "Ideal para especialistas independientes o consultorios individuales.", monthly: 0, vat: false,
    features: ["1 usuario (Administrador/Doctor)", "Registro de hasta 20 pacientes activos", "Historia clínica digital formulario 033 MSP con odontograma", "Generación de recetas médicas"],
    off: ["Agendamiento de citas completo", "Personalización de marca (Logo)", "Reportes de ingreso"],
    note: "No requiere tarjeta de crédito, prueba todas las funciones", cta: "Comenzar Prueba Gratis" },
  { name: "Plan Individual (Pro)", desc: "Para clínicas con equipo profesional y alta rotación.", monthly: 24.99, vat: true, pro: true,
    features: ["3 usuarios (Administrador/Doctor/Secretario)", "Pacientes ilimitados", "Historia clínica digital formulario 033 MSP con odontograma", "Generación de recetas y recibos", "Agendamiento de citas completo", "Estados de cita (pendiente, asistió, no asistió, canceló)", "Personalización de marca (logo en recetas y recibos)", "Conteo mensual de ingresos", "Soporte prioritario"],
    off: ["Módulo de reportes avanzado"],
    note: "Escala tu práctica con herramientas profesionales", cta: "Probar Clínica Pro 30 Días" },
  { name: "Plan Avanzado (Clínica/Equipo)", desc: "Cadenas odontológicas, plazas y centros hospitalarios.", monthly: 49.99, vat: true,
    features: ["Usuarios ilimitados", "Pacientes ilimitados", "Gestión completa y centralizada de pacientes", "Historia clínica digital formulario 033 MSP con odontograma", "Recetas y recibos profesionales con logo", "Agendamiento multidoctor por especialista y motivo", "Control total de citas y estados", "Módulo de reportes avanzado y dashboard de ingresos", "Soporte prioritario y capacitación"],
    note: "Optimiza el flujo de trabajo de tu clínica y maximiza la rentabilidad", cta: "Contactar a Ventas" },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const price = (p: Plan) => (annual ? p.monthly * 0.8 : p.monthly).toFixed(2);
  return (
    <section id="precios" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500">Planes sin letra pequeña</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Precios transparentes para crecer a tu ritmo</h2>
          <p className="mt-3 text-slate-500">Sin costos de instalación ni permanencia mínima. Cancela cuando quieras.</p>
          <div className="relative mt-6 inline-flex rounded-xl border border-brand-100 bg-white p-1" role="group">
            {[["Facturación Mensual", false], ["Facturación Anual", true]].map(([label, val]) => (
              <button key={String(label)} onClick={() => setAnnual(val as boolean)} className="relative rounded-lg px-5 py-2 text-xs font-semibold">
                {annual === val && <motion.span layoutId="pill" className="absolute inset-0 rounded-lg bg-brand-50" />}
                <span className="relative">{label}{val && <em className="ml-2 rounded bg-green-100 px-1.5 py-0.5 text-[10px] not-italic text-green-700">Ahorra 20%</em>}</span>
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="flex">
              <motion.div whileHover={{ y: -6 }} className={`relative flex w-full flex-col rounded-3xl bg-white p-7 ${p.pro ? "border-2 border-brand-500 shadow-2xl shadow-brand-500/20" : "border border-brand-100"}`}>
                {p.pro && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-500 px-4 py-1 text-[11px] font-bold text-white">MÁS POPULAR • CLÍNICAS EN CRECIMIENTO</span>}
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-1 min-h-10 text-xs text-slate-500">{p.desc}</p>
                <div className={`my-4 text-4xl font-extrabold ${p.pro ? "text-brand-500" : ""}`}>
                  ${price(p)} <small className="text-xs font-medium text-slate-500">{p.vat && "+IVA "}/mes</small>
                </div>
                <ul className="mb-6 flex-1 space-y-2.5 text-xs">
                  {p.features.map(f => <li key={f} className="flex gap-2"><Check size={14} className="mt-0.5 shrink-0 text-green-600" />{f}</li>)}
                  {p.off?.map(f => <li key={f} className="flex gap-2 text-slate-400 line-through"><X size={14} className="mt-0.5 shrink-0" />{f}</li>)}
                </ul>
                <p className="mb-4 rounded-xl bg-brand-50 p-2.5 text-center text-[11px] font-semibold text-brand-500">{p.note}</p>
                <a href={SIGNUP_URL} className={`block rounded-xl py-3 text-center text-sm font-semibold transition ${p.pro ? "bg-brand-500 text-white hover:bg-brand-600" : "bg-brand-50 text-brand-500 hover:bg-brand-100"}`}>{p.cta}</a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
