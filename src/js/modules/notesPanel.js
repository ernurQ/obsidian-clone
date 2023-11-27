import {createNewNoteButton} from "../services/createNewNoteButton";
import {isOpenTab} from "./workspaceTabs";
import {activateTab} from "./workspaceTabs";
import {activateNote} from "./workspaceNotes";
import {Note} from "../services/note";

const notesPanelHtml = document.querySelector('.notes-panel')

export function notesPanel() {
    const newNoteButton = notesPanelHtml.querySelector('.notes-panel__new-note')
    createNewNoteButton(newNoteButton)

    const notesList = notesPanelHtml.querySelector('.notes-panel__list')
    notesList.addEventListener('click', e => {
        /** @type {HTMLElement} */
        const target = e.target
        if (target === null) {
            return
        }

        if (target.classList.contains('notes-panel__note')) {
            const title =  target.textContent
            if (isOpenTab(title)) {
                activateTab(title)
                activateNote(title)
                return
            }

            new Note(title, '', '/').open()
            activateTab(title)
            activateNote(title)
        }
    })
}

export function noteExists(title) {
    const titles = notesPanelHtml.querySelectorAll('.notes-panel__note')

    for (const t of titles) {
        if (t.textContent === title) {
            return true
        }
    }

    return false
}