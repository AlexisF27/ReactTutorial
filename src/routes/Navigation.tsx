import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom"
import logo from '../logo.svg'
import { routes } from "./routes"

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react-logo" />
                    <ul>
                        {routes.map(({ to, name }) => (
                            <li key={to}>
                                <NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')}>{name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Routes>
                    {routes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}

                    <Route path="/*" element={<Navigate to="/lazy1" replace></Navigate>}></Route>
                </Routes>

            </div >
        </BrowserRouter >
    )
}

export default Navigation
