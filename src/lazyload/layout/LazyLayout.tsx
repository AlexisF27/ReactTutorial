import { Route, Routes, NavLink, Navigate } from "react-router-dom"
import { routesLazyChilds, LAZY_BASE_PATH } from '../../routes/routes';
import { Suspense } from "react"

export const LazyLayout = () => {
    return (
        <>
            <h1>Lazy Layout</h1>
            <ul>
                {routesLazyChilds.map(({ to, name }) => (
                    <li key={to}>
                        <NavLink to={`${LAZY_BASE_PATH}/${to}`}>{name}</NavLink>
                    </li>
                ))}
            </ul>
            <Suspense fallback={<div>Cargando...</div>}>
                <Routes>
                    {routesLazyChilds.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path='/*' element={<Navigate replace to="/lazy1" />} />

                </Routes>
            </Suspense>

        </>
    )
}


export default LazyLayout
