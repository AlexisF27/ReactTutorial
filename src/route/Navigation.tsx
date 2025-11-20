import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom"
import logo from '../logo.svg'

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react-logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h1>About</h1>}></Route>
                    <Route path="users" element={<h1>Users</h1>}></Route>
                    <Route path="home" element={<h1>Home</h1>}></Route>
                    <Route path="/*" element={<Navigate to="/home" replace></Navigate>}></Route>
                </Routes>

            </div >
        </BrowserRouter >
    )
}

export default Navigation
