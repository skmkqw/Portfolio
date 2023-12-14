const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault()

		const ID = anchor.getAttribute('href').substring(1)

		document.getElementById(ID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})