const discordLinks = document.querySelectorAll('#discord')

discordLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert('Discord-username: @timofei9451')
    })
})
