import {activateNote, removeNote} from "./workspaceNotes";

const tabsList = document.querySelector('.tabs-list')


export function workspaceTabs() {
    tabsList.addEventListener('click', e => {
        /** @type {HTMLElement} */
        const target = e.target
        if (target === null) {
            return
        }

        if (target.classList.contains('tab__close-btn')) {
            const btn = target
            const tab = target.parentElement
            tab.classList.add('tab_collapsed')
            btn.remove()
            removeNote(tab.querySelector('.tab__content').textContent)

            setTimeout(() => {
                tab.remove()
            }, 250)
            return
        }

        if (target.classList.contains('tab__content')) {
            const tab = target.parentElement
            if (tab.classList.contains('tab_active')) {
                return
            }
            activateTab(target.textContent)
        }
        if (target.classList.contains('tab')) {
            if (target.classList.contains('tab_active')) {
                return
            }
            activateTab(target.textContent)
        }
    })
}

/**
 * @param {string} title The date
 */
export function activateTab(title) {
    const tabs = tabsList.querySelectorAll('.tab')
    tabs.forEach(tab => {
        if (tab.querySelector('.tab__content').textContent === title) {
            tab.classList.add('tab_active')
            return
        }
        tab.classList.remove('tab_active')
    })

    activateNote(title)
}
