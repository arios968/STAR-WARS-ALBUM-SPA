export const API_BASE = 'https://swapi.dev/api'


async function fetchWithRetry(url, tries = 4) {
for (let i = 0; i < tries; i++) {
try {
const res = await fetch(url)
if (!res.ok) throw new Error('Not found')
return await res.json()
} catch (e) {
if (i === tries - 1) throw e
// small delay
await new Promise(r => setTimeout(r, 200))
}
}
}


export async function fetchResource(section, id) {
// section: 'films' | 'people' | 'starships'
const url = `${API_BASE}/${section}/${id}/`
return fetchWithRetry(url)
}