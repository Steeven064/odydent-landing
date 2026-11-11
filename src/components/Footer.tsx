const cols: [string, string[]][] = [
  ["Producto & Módulos", ["Agenda & Citas Automatizadas", "Odontograma Digital", "Historia Clínica Electrónica", "Portal del Paciente & Pagos"]],
  ["Seguridad & Compliance", ["HIPAA Ready Certified", "Cifrado End-to-End AES-256", "Copias Redundantes Diarias", "Cumplimiento RGPD & LOPD"]],
  ["Empresa", ["Sobre Nosotros", "Socios Odontológicos", "Contacto de Ventas", "Estado del Sistema"]],
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-slate-50 px-6 pb-8 pt-14 text-sm">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-brand-500"><img src="/favicon.svg" alt="" className="size-8 rounded-lg" />OdyDent</div>
          <p className="mt-3 max-w-xs text-slate-500">Ecosistema integral cloud para clínicas y especialistas dentales. Automatización clínica, odontograma interactivo.</p>
        </div>
        {cols.map(([t, items]) => (
          <div key={t}><h4 className="mb-3 font-bold">{t}</h4><ul className="space-y-2 text-slate-500">{items.map(i => <li key={i}>{i}</li>)}</ul></div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-brand-100 pt-5 text-xs text-slate-500">
        <span>© 2026 OdyDent Inc. Todos los derechos reservados.</span>
        <nav className="flex gap-5"><a href="#">Términos de Servicio</a><a href="#">Privacidad de Datos Clínicos</a><a href="#">Acuerdo BAA HIPAA</a></nav>
      </div>
    </footer>
  );
}
