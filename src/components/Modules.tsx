import { motion } from "motion/react";
import { CalendarDays, FileText, Smile, Wallet, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

const modules: { icon: LucideIcon; title: string; text: string; tag: string }[] = [
  { icon: CalendarDays, title: "Agenda & Citas Multi-sillón", text: "Visualiza simultáneamente tus sillones clínicos y la disponibilidad de cada doctor. Lista de espera dinámica que rellena huecos automáticamente.", tag: "Integración WhatsApp" },
  { icon: Smile, title: "Odontograma & Ficha Digital", text: "Odontograma interactivo para adultos y niños. Consentimiento informado con firma táctil y recetas médicas con código QR.", tag: "Adulto & Pediátrico" },
  { icon: FileText, title: "Presupuestos Inteligentes", text: "Presupuestos visuales por fases de tratamiento. Envío directo al WhatsApp del paciente en PDF y registro de aceptaciones.", tag: "+35% Aceptación" },
  { icon: Wallet, title: "Caja, Abonos & Comisiones", text: "Pagos fraccionados, cuadre de caja diario por sucursal y liquidación automática de honorarios por doctor.", tag: "Auditoría en Vivo" },
];

export default function Modules() {
  return (
    <section id="modulos" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-500">Módulos especializados</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Herramientas creadas por y para dentistas</h2>
          </div>
          <p className="max-w-sm text-sm text-slate-500">Cada módulo resuelve un cuello de botella crítico en la atención clínica y la administración del consultorio dental.</p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map(({ icon: Icon, title, text, tag }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-3 rounded-3xl border border-brand-100 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-brand-500/10"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-500"><Icon size={22} /></span>
              <h3 className="text-lg font-bold leading-snug">{title}</h3>
              <p className="flex-1 text-xs text-slate-500">{text}</p>
              <span className="rounded-lg bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-500">{tag}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
