import { motion } from "motion/react";
import { Check, TriangleAlert, X } from "lucide-react";
import Reveal from "./Reveal";

const bad = [
  ["Hasta 40% de Ausentismo (No-shows)", "Llamar a mano a cada paciente consume horas de la recepcionista y muchos olvidan asistir sin un recordatorio interactivo."],
  ["Fichas Clínicas Extraviadas o Ilegibles", "Carpetas físicas vulnerables a pérdidas, sin trazabilidad fotográfica de radiografías y cero respaldo legal en la nube."],
  ["Cálculo Manual de Contabilidad", "Control ineficiente de ingresos y gastos por doctor en hojas de cálculo desactualizadas de tu consultorio."],
  ["Fuga Silenciosa de Cobros y Tratamientos", "Pacientes que abandonan planes a medio terminar sin seguimiento automático de pagos pendientes."],
];
const good = [
  ["Recordatorios Inteligentes", "Automatiza el envío de recordatorios de citas directamente al WhatsApp de tus pacientes."],
  ["Fichas clìnicas digitales & Odontograma interactivo", "Registra diagnósticos, tratamientos y evolución clínica mediante fichas digitales y un odontograma interactivo de forma rápida y organizada."],
  ["Contabilidad avanzada de ingresos", "Lleva el control de los ingresos de tu consultorio odontológico de forma precisa y organizada. Registra pagos, consulta movimientos financieros y genera reportes detallados."],
  ["Comprobantes automáticos de pacientes", "Lleva un mejor control de los tratamientos de tus pacientes y genera su comprobante de pago al instante."],
];

function List({ items, ok }: { items: string[][]; ok?: boolean }) {
  return (
    <ul className="space-y-5">
      {items.map(([t, d], i) => (
        <motion.li
          key={t}
          initial={{ opacity: 0, x: ok ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex gap-3"
        >
          {ok ? <Check className="mt-0.5 shrink-0 text-green-600" size={18} /> : <TriangleAlert className="mt-0.5 shrink-0 text-red-500" size={18} />}
          <div><b className="block text-sm">{t}</b><p className="text-xs text-slate-500">{d}</p></div>
        </motion.li>
      ))}
    </ul>
  );
}

export default function Problem() {
  return (
    <section id="caracteristicas" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-500">Diagnóstico operativo</span>
        <h2 className="mx-auto mt-2 max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">¿Cuánto dinero pierde tu clínica con métodos tradicionales?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">Compara la frustración de las agendas manuales versus la automatización integral en la nube con OdyDent.</p>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 p-7">
          <div className="mb-6 flex items-center gap-3"><X className="rounded-full bg-red-100 p-1.5 text-red-500" size={34} /><div><h3 className="font-bold">Gestión Tradicional (Papel, Excel &amp; Cuadernos)</h3><p className="text-xs font-semibold text-red-500">Ineficiente, lenta y propensa a pérdidas</p></div></div>
          <List items={bad} />
        </div>
        <div className="rounded-3xl border border-brand-100 bg-brand-50 p-7">
          <div className="mb-6 flex items-center gap-3"><Check className="rounded-full bg-brand-500 p-1.5 text-white" size={34} /><div><h3 className="font-bold">Con OdyDent Clinical Suite</h3><p className="text-xs font-semibold text-brand-500">Control absoluto, rentabilidad y tranquilidad</p></div></div>
          <List items={good} ok />
        </div>
      </div>
    </section>
  );
}
