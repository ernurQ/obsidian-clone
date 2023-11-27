export function tabsList() {
    const tabsList = document.querySelector('.tabs-list')

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
            activateTab(target.parentElement)
        }
        if (target.classList.contains('tab')) {
            if (target.classList.contains('tab_active')) {
                return
            }
            activateTab(target)
        }
    })

    /**
     * @param {HTMLElement} tab The date
     */
    function activateTab(tab) {
        const tabs = tabsList.querySelectorAll('.tab')
        tabs.forEach(tab => {
            tab.classList.remove('tab_active')
        })
        tab.classList.add('tab_active')
    }
}

