
export class Note {
    constructor(title, content, path) {
        this.content = content
        this.path = path
        this.title = title;
    }
    get id() {
        return this.title;
    }



    _renderNotesPanel() {
        const notesListItem = document.createElement('li')
        notesListItem.classList.add('notes-panel__note')
        notesListItem.textContent = this.title
        document.querySelector('.notes-panel__list').append(notesListItem)
    }
    _renderNoteTab() {
        const tab = document.createElement('li')
        tab.classList.add('tab')
        tab.innerHTML = `
            <div class="tab__content">${this.title}</div>
            <div class="tab__close-btn">&times;</div>
        `
        document.querySelector('.tabs-list').append(tab)
    }
    _renderNoteContent() {
        const noteHeader = document.createElement('input')
        noteHeader.classList.add('note__header')
        noteHeader.type = 'text'
        noteHeader.value = this.title

        const noteContent = document.createElement('textarea')
        noteContent.classList.add('note__content')
        noteContent.value = this.content

        const note = document.createElement('li')
        note.classList.add('note')
        note.append(noteHeader)
        note.append(noteContent)

        document.querySelector('.workspace__notes').append(note)
    }

    render() {
        this._renderNotesPanel()
        this._renderNoteTab()
        this._renderNoteContent()
    }
}