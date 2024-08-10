# Front-end Clon Instagram Web3

## Instalaremos tailwindCSS

Pueden seguir los pasos de la [documentación oficial si utilizamos Vite](https://tailwindcss.com/docs/guides/vite).

Ejecutamos las siguientes dependencias

```shell
npm install -D tailwindcss postcss autoprefixer
```

Inicializamos tailwind

```shell
npx tailwindcss init -p
```

Modificamos el `archivo tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Actualizamos el archivo `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Instalaremos algunos íconos que [utilizaremos](https://www.npmjs.com/package/react-feather).

```shell
npm i react-feather
```