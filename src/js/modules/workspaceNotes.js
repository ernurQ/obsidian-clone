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