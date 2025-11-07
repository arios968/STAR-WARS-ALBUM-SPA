import React from 'react'


export default function StickerCard({ sticker, onAdd, onDiscard, inAlbum }) {
if (!sticker) return null
const { section, id, name, special } = sticker
return (
<div className="border rounded p-3">
<div className="text-sm font-semibold">{section}</div>
<div>ID: {id}</div>
<div className="font-bold">{name}</div>
<div className="text-xs">{special ? 'Especial' : 'Regular'}</div>
<div className="mt-2">
{inAlbum ? (
<button className="px-3 py-1 rounded border" onClick={() => onDiscard(sticker)}>Descartar</button>
) : (
<button className="px-3 py-1 rounded bg-green-500 text-white" onClick={() => onAdd(sticker)}>Agregar al álbum</button>
)}
</div>
</div>
)
}