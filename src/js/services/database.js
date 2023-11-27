// import {Note} from "./note";

export async function createNote(url, note) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(note)
    })
}

/**
 * @param {string} url The date
 * @param {Note} note The string
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