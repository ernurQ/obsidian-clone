import {createNewNoteButton} from "../services/createNewNoteButton";

export function notesPanel() {
    const notesPanelButtons = document.querySelector('.notes-panel__buttons')
    const newNoteButton = notesPanelButtons.querySelector('.notes-panel__new-note')

    createNewNoteButton(newNoteButton)

}