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

async function updateData(url, data, id) {
    return fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
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

export function getNotes() {
    const url = 'http://localhost:3000/notes'
    return getData(url)
}

export function updateNote(note) {
    const url = 'http://localhost:3000/notes'
    const id = note['title']
    updateData(url, note, id)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Could not update ${url}/${id}, status: ${res.status}`)
            }
        })}