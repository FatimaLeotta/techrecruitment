# Tech Recruitment desde cero — Landing

Landing page de **Fátima Leotta** · 3ª edición del programa *Tech Recruitment desde cero*.

## Contenido

- `index.html` — la landing completa en **un solo archivo**: CSS, tipografías (Sentient + DM Sans), imágenes y scripts están embebidos dentro del HTML. No hay assets sueltos, así que nada puede romperse o dar 404.
- `vercel.json` — configuración mínima para Vercel.

## Cómo deployar en Vercel (vía GitHub)

1. Creá un repositorio nuevo en GitHub (puede ser privado).
2. Subí estos archivos a la raíz del repo (`index.html`, `vercel.json`, `README.md`).
3. En [vercel.com](https://vercel.com) → **Add New → Project** → importá el repo.
4. Framework Preset: **Other**. No hay build command ni output directory — dejá todo vacío/default.
5. **Deploy**. Listo: la landing queda en `https://tu-proyecto.vercel.app`.

También funciona arrastrando la carpeta directamente en https://vercel.com/new (deploy sin GitHub).

## Notas

- El archivo pesa ~2.3 MB porque incluye todas las imágenes y fuentes adentro (las fotos están optimizadas/comprimidas). Es intencional: garantiza que se vea igual en cualquier hosting.
- Para editar contenido, conviene editar la versión de trabajo original y volver a exportar, no este archivo compilado.
