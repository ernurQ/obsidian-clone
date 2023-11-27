const modal = document.querySelector('.modal')
const modalContent = modal.querySelector('.modal__content')

modal.addEventListener('click', e => {
    /** @type {HTMLElement} */
    const target = e.target
    if (target == null) {
        return
    }
    if (target.classList.contains('modal')) {
        closeModal()
        return
    }
    if (target.classList.contains('modal__close-btn')) {
        closeModal()
    }
})

export function closeModal() {
    modal.classList.remove('modal_active')
    modalContent.innerHTML = `
        <div class="modal__close-btn">&times;</div>
    `
}

export function openModal(contentHTML) {
    modal.classList.add('modal_active')
    modalContent.append(contentHTML)
}