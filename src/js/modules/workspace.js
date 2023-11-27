const workspaceNotes = document.querySelector('.workspace__notes')

export function workspace() {

}

/**
 * @param {string} title The date
 */
export function activateNote(title) {
    const notes = workspaceNotes.querySelectorAll('.note')
    notes.forEach(tab => {
        if (tab.querySelector('.note__header').value === title) {
            tab.classList.add('note_active')
            return
        }
        tab.classList.remove('note_active')
    })
}