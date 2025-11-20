import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom"
import logo from '../logo.svg'
import { LazyPages1, LazyPages2, LazyPages3 } from '../lazyload/pages/index'

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react-logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazy1" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="lazy1" element={<LazyPages1 />}></Route>
                    <Route path="lazy2" element={<LazyPages2 />}></Route>
                    <Route path="lazy3" element={<LazyPages3 />}></Route>
                    <Route path="/*" element={<Navigate to="/lazy1" replace></Navigate>}></Route>
                </Routes>

            </div >
        </BrowserRouter >
    )
}

export default Navigation
