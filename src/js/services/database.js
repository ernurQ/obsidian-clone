async function postData(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

async function getData(url) {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json()
}

export function addNote(note) {
    const url = 'http://localhost:3000/notes'
    postData(url, note)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Could not post ${url}, status: ${res.status}`)
            }
        })
}

export function getPaths() {
    const url = 'http://localhost:3000/notes?path_like=/'
    return getData(url)
}

/**
 * @param {string} url The date
 * @param {Note} note The
 */
export async function updateNote(url, note) {
    return fetch(`${url}/${note.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(note)
    })
}