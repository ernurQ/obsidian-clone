import {activateTab} from "./workspaceTabs";

const notesList = document.querySelector('.workspace__notes')

export function workspaceNotes() {

}

/**
 * @param {string} title The date
 */
export function activateNote(title) {
    const notes = notesList.querySelectorAll('.note')
    notes.forEach(tab => {
        if (tab.querySelector('.note__header').value === title) {
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
                console.log(title)
                activateTab(title)
                activateNote(title)
            }
        }
    }
}