import React from 'react'
import StickerCard from './StickerCard'


export default function Pack({ index, state, openPack }) {
// state: { locked: bool, loading: bool, openedStickers: [] }
return (
<div className={`p-4 border rounded ${state.locked ? 'opacity-60' : ''}`}>
<div className="flex items-center justify-between">
<div>Sobre {index + 1}</div>
<div>
<button disabled={state.locked || state.loading} onClick={() => openPack(index)} className="px-3 py-1 rounded bg-blue-600 text-white">Abrir</button>
</div>
</div>
<div className="mt-3 grid grid-cols-1 gap-2">
{state.loading && <div>Abriendo sobre...</div>}
{state.openedStickers?.map(s => (
<StickerCard key={`${s.section}-${s.id}`} sticker={s} inAlbum={s.inAlbum} />
))}
</div>
</div>
)
}