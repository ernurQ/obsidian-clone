function navbar() {
    const navbarButton = document.querySelector('.navbar__notes-panel-btn')
    const notesPanel = document.querySelector('.notes-panel')
    const notesPanelCollapseClass = 'notes-panel_collapsed'

    navbarButton.addEventListener('click', () => {
        notesPanel.classList.toggle(notesPanelCollapseClass)
    })
}

export {navbar}