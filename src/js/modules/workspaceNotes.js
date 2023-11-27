import {activateTab} from "./workspaceTabs";
import {updateNote} from "../services/database";

const notesList = document.querySelector('.workspace__notes')

export function workspaceNotes() {
    notesList.addEventListener('click', evt => {
        /** @type {HTMLElement} */
        const target = evt.target
        if (target === null) {
            return
        }

        if (target.classList.contains('icon-floppy') || target.classList.contains('note__save-btn')) {
            saveActiveNote()
        }
    })
}

/**
 * @param {string} title The date
 */
export function activateNote(title) {
    const notes = notesList.querySelectorAll('.note')
    notes.forEach(tab => {
        if (tab.querySelector('.note__title').value === title) {
            tab.classList.add('note_active')
            return
        }
        tab.classList.remove('note_active')
    })
}

/**
 * @param {string} title The date
 */
export function removeNote(title) {
    const notes = notesList.querySelectorAll('.note')

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i]

        if (note.querySelector('.note__header').value === title) {
            note.remove()

            if (note.classList.contains('note_active') && notes.length > 1) {
                const activeNote = notes[(i === 0 ? 1 : 0)]
                const title = activeNote.querySelector('.note__header').value
                activateTab(title)
                activateNote(title)
            }
        }
    }
}

function saveActiveNote() {
    const activeNote = notesList.querySelector('.note_active')
    const title = activeNote.querySelector('.note__title').value
    const content = activeNote.querySelector('.note__content').value
    updateNote({
        title: title,
        content: content,
        path: '/'
    })
}