import React from 'react'
import Pack from './Pack'


export default function PackRow({ packs, openPack }) {
return (
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
{packs.map((p, i) => (
<Pack key={i} index={i} state={p} openPack={openPack} />
))}
</div>
)
}