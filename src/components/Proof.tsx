import { Star } from "lucide-react";
import Reveal from "./Reveal";

const stats = [["-45%", "Ausentismo a Citas", "Con confirmación automatizada"], ["+3.5 h", "Ahorro Diario por Doctor", "Menos papeleo administrativo"], ["3×", "Aprobación de Presupuestos", "Explicación visual al paciente"], ["99.9%", "Disponibilidad en la Nube", "Acceso desde cualquier dispositivo"]];
const quotes = [
  ["Antes dedicábamos demasiado tiempo a organizar las citas, revisar historias clínicas y llevar el control de los pacientes. Con OdyDent, ahora gestionamos todo desde un solo lugar, ahorramos tiempo y brindamos una atención mucho más rápida y organizada.", "Dra. Valeria Montero", "Directora Clínica • DentalStudio Cuenca"],
  ["El odontograma en la tablet cambió la forma de vender. Le mostramos al paciente la pieza en rojo y la urgencia es inmediata. La aceptación de tratamientos subió un 40% en 3 meses.", "Dr. Sebastián Morales", "Odontòlogo general • Centro Odontológico Santiago"],
  ["Manejar mi consultorio era un dolor de cabeza. OdyDent unificó los historiales para que los pacientes se atiendan con su Hisotira clìnica y saldo al día.", "Dra. Hillary Ulloa", "Socia Fundadora • Hillary Ulloa Odontologìa Imbabura"],
];

export default function Proof() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(([n, t, s], i) => (
          <Reveal key={t} delay={i * 0.08} className="rounded-3xl border border-brand-100 p-6 text-center">
            <strong className="block text-4xl font-extrabold text-brand-500">{n}</strong>
            <b className="block text-sm">{t}</b><small className="text-xs text-slate-500">{s}</small>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-20 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-500">Casos de éxito reales</span>
        <h2 className="mx-auto mt-2 max-w-xl text-3xl font-extrabold tracking-tight md:text-4xl">Directores de clínicas que confían en OdyDent</h2>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {quotes.map(([q, n, r], i) => (
          <Reveal key={n} delay={i * 0.1} className="flex flex-col gap-5 rounded-3xl bg-slate-50 p-6">
            <div className="flex text-brand-500">{Array.from({ length: 5 }, (_, k) => <Star key={k} size={16} fill="currentColor" />)}</div>
            <blockquote className="flex-1 text-sm text-slate-600">“{q}”</blockquote>
            <figcaption className="flex items-center gap-3 text-xs text-slate-500">
              <span className="grid size-10 place-items-center rounded-full bg-brand-50 font-bold text-brand-500">{n.split(" ").slice(1).map(w => w[0]).join("")}</span>
              <div><b className="block text-sm text-ink">{n}</b>{r}</div>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
