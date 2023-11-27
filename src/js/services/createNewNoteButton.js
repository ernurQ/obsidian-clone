import {openModal} from "./modal";
import {closeModal} from "./modal";
import {Note} from "./note";
import {activateNote} from "../modules/workspace";

/**
 * @param {HTMLElement} newNoteButton The date
 */
export function createNewNoteButton(newNoteButton) {
    const form = document.createElement('form')
    form.innerHTML = `
        <form action="#" class="modal__form">
        <label class="modal__label">
            Note title
            <input class="modal__input" name="title">
        </label>
        <label class="modal__label">
            Note path
            <input class="modal__input" placeholder="/" name="path">
        </label>

        <button class="modal__submit">create</button>
        </form>
    `
    newNoteButton.addEventListener('click', () => {
        openModal(form)
    })

    form.addEventListener('submit', e => {
        e.preventDefault()

        let {title, path} = Object.fromEntries(new FormData(form).entries())

        if (path === '') {
            path = '/'
        }
        if (title === '') {
            return
        }

        form.reset()
        closeModal()

        const note = new Note(title, '', path)
        note.render()
        activateNote(title)
    })
}