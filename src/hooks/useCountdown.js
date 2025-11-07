import { useState, useEffect } from 'react'


export default function useCountdown(untilTimestamp) {
const [now, setNow] = useState(() => Date.now())


useEffect(() => {
const t = setInterval(() => setNow(Date.now()), 1000)
return () => clearInterval(t)
}, [])


const remaining = Math.max(0, Math.ceil((untilTimestamp - now) / 1000))
return remaining
}