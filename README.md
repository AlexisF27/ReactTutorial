# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Notas de Desarrollo — Patrones y Debugging
 
Documento vivo con patrones, decisiones técnicas y bugs resueltos a lo largo
del proyecto. Se va actualizando conforme aparecen nuevos temas.
 
---
 
## Índice
 
- [Rutas y Lazy Loading](#rutas-y-lazy-loading)
<!-- Agregar aquí nuevas entradas del índice conforme se sumen secciones -->
 
---
 
## Rutas y Lazy Loading
 
**Stack:** React 19, `react-router-dom` v7, TypeScript, Webpack (create-react-app).
 
### Estructura de rutas
 
Se separan **dos niveles** de rutas, cada uno con su propio array — un array
de nivel raíz (usado por el router principal) y uno o más arrays de rutas
hijas (usados dentro de sus respectivos layouts):
 
```typescript
export interface RouteItem {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}
```
 
**Por qué separarlos:** si un layout mapea el mismo array que lo contiene a
sí mismo, genera un `<Route element={<Layout />}>` dentro de su propio
`<Routes>` → renderizado recursivo infinito → `Maximum update depth exceeded`.
 
### Rutas relativas vs. absolutas
 
| Contexto | Tipo de ruta | Ejemplo |
|---|---|---|
| `NavLink`/`Navigate` en el menú raíz de la app | Absoluta (`/...`) | `to="/lazyload/lazy1"` |
| `NavLink`/`Navigate` dentro de un `<Routes>` anidado | Relativa (sin `/`) | `to="lazy1"` |
 
Un solo carácter (`/` de más o de menos) cambia el comportamiento por
completo. Síntomas típicos cuando se mezclan mal:
- URL concatenándose infinitamente al hacer click.
- Warning: `Pathnames cannot have embedded double slashes`.
- Parpadeo por un `<Navigate>` que rebota entre dos URLs y no aterriza.
Patrón para evitar hardcode del prefijo en el menú raíz:
 
```tsx
export const LAZY_BASE_PATH = '/lazyload';
 
<NavLink to={`${LAZY_BASE_PATH}/${to}`}>{name}</NavLink>
```
 
### `React.lazy()` + `<Suspense>`
 
- Siempre requiere un `<Suspense>` ancestro; sin él, comportamiento
  inconsistente entre versiones/navegadores.
- Un solo `<Suspense>` puede envolver varias rutas lazy.
- En dev, el chunk no se compila hasta la primera visita — la primera carga
  puede sentirse lenta, las siguientes son instantáneas (no es un bug).
### `webpackChunkName`
 
```typescript
lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../pages/LazyPages1'));
```
 
Exclusivo de Webpack (no aplica en Vite/Rollup). El comentario va dentro de
los paréntesis de `import(...)`, no de `lazy(...)`.
 
### Checklist si una ruta anidada se comporta raro
 
1. ¿Se está mapeando el array correcto (padre vs. hijo)?
2. ¿Algún `to`/`Navigate` dentro de rutas anidadas lleva `/` de más o de
   menos?
3. ¿Queda throttling activado en el Network tab de una prueba anterior?
4. ¿Hay algún `<Route>` envolvente sin `path` ni `index` agregando
   anidamiento innecesario?
5. ¿Falta el `<Suspense>` alrededor de las rutas lazy?

