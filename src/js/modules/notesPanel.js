import {createNewNoteButton} from "../services/createNewNoteButton";
import {isOpenTab} from "./workspaceTabs";
import {activateTab} from "./workspaceTabs";
import {activateNote} from "./workspaceNotes";
import {Note} from "../services/note";

export function notesPanel() {
    const notesPanel = document.querySelector('.notes-panel')

    const newNoteButton = notesPanel.querySelector('.notes-panel__new-note')
    createNewNoteButton(newNoteButton)

    const notesList = notesPanel.querySelector('.notes-panel__list')
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