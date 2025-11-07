import React from 'react'


export default function Modal({ open, onClose, children }) {
if (!open) return null
return (
<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
<div className="bg-white rounded-lg p-4 max-w-2xl w-full">
<button className="ml-auto mb-2" onClick={onClose}>Cerrar</button>
{children}
</div>
</div>
)
}