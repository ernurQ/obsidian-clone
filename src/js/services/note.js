
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
        // const noteTitle = document.createElement('input')
        // noteTitle.classList.add('note__title')
        // noteTitle.type = 'text'
        // noteTitle.value = this.title
        //
        // const closeButton = document.createElement('button')
        // closeButton.classList.add('note__save-btn')
        // closeButton.innerHTML = '<span class="icon-floppy"></span>'
        //
        // const noteHeader = document.createElement('div')
        // noteHeader.classList.add('note__header')
        //
        //
        // const noteContent = document.createElement('textarea')
        // noteContent.classList.add('note__content')
        // noteContent.value = this.content
        //
        // const note = document.createElement('li')
        // note.classList.add('note')
        // note.append(noteTitle)
        // note.append(noteContent)
        const note = document.createElement('li')
        note.classList.add('note')
        note.innerHTML = `
            <div class="note__header">
                <input type="text" class="note__title">
                <button class="note__save-btn"><span class="icon-floppy"></span></button>
            </div>
            <textarea class="note__content">${this.content}</textarea>
        `
        note.querySelector('.note__title').value = this.title

        document.querySelector('.workspace__notes').append(note)
    }

    render() {
        this._renderNotesPanel()
        this._renderNoteTab()
        this._renderNoteContent()
    }
    open() {
        this._renderNoteTab()
        this._renderNoteContent()
    }
    getJson() {
        return {
            title: this.title,
            content: this.content,
            path: this.path
        }
    }
}