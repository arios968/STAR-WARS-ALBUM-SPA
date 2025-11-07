import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Header({ remainingLock }) {
const loc = useLocation()
return (
<header className="p-4 bg-gradient-to-r from-indigo-700 to-sky-600 text-white flex items-center justify-between">
<h1 className="text-xl font-bold">Álbum Digital - Star Wars</h1>
<nav className="space-x-4">
<Link className={`px-3 py-1 rounded ${loc.pathname === '/' ? 'bg-white/20' : ''}`} to="/">Obtener Láminas</Link>
<Link className={`px-3 py-1 rounded ${loc.pathname === '/album' ? 'bg-white/20' : ''}`} to="/album">Mi álbum</Link>
<span className="ml-4">{remainingLock > 0 ? `Sobres bloqueados: ${remainingLock}s` : 'Sobres listos'}</span>
</nav>
</header>
)
}