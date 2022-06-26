(() => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.querySelector('.dropdown__info').onclick = () => {
            const opened = dropdown.getAttribute('opened')
            dropdown.setAttribute('opened', opened === '1' ? '0' : '1')
            dropdown.querySelector('.dropdown__info strong').innerText = opened === '1' ? '+' : '–'
        }
    })
})()