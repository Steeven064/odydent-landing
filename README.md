# OdyDent – Landing (React + TS + Vite + Tailwind 4 + Motion + Lucide)

## Desarrollo
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera /dist
```

## GitHub
```bash
git init && git add . && git commit -m "Landing OdyDent"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/odydent-landing.git
git push -u origin main
```

## Vercel
1. vercel.com → **Add New → Project** → importa el repositorio.
2. Framework: Vite (se detecta solo). Build: `npm run build`. Output: `dist`.
3. **Deploy**. Luego, en Settings → Domains, conecta tu dominio.

## Personalizar
- Colores/tipografía: `@theme` en `src/index.css`.
- Enlaces de los botones: constante `SIGNUP_URL` en `src/App.tsx`.
- Logo/fotos: carpeta `public/`.
