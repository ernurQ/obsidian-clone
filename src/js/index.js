import 'normalize.css'
import '../sass/style.sass'

import {navbar} from "./modules/navbar";
import {notesPanel} from "./modules/notesPanel";
import {tabsList} from "./modules/tabsList";

document.addEventListener('DOMContentLoaded', () => {

    navbar()
    notesPanel()
    tabsList()

})

// document.querySelector('.navbar__notes-list-btn').addEventListener('click', () => {
//     const notesList = document.querySelector('.notes-panel')
//     notesList.classList.toggle('notes-panel_collapsed')
// })
//
//
// document.querySelector('.tabs-list').addEventListener('click', e => {
//     /** @type {HTMLElement} */
//     const target =  e.target
//     if (target === null) {
//         return
//     }
//     if (target.classList.contains('tab__content')) {
//         target.parentElement.classList.add('tab_active')
//     }
//     if (target.classList.contains('tab')) {
//         target.classList.add('tab_active')
//     }
//     if (target.classList.contains('tab__close-btn')) {
//
//         target.parentElement.classList.add('tab_collapsed')
//         setTimeout(() => {
//             target.parentElement.remove()
//         }, 250)
//     }
// })