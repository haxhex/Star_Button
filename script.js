document.querySelectorAll('.star-toggle').forEach(toggle => {

    let input = toggle.querySelector('input')

    toggle.addEventListener('click', e => {
        e.preventDefault()

        if(toggle.classList.contains('animated')) {
            return
        }
        toggle.classList.add('animated')

        gsap.to(toggle, {
            keyframes: [{
                '--y': '-48px',
                duration: .3,
                ease: 'power2.out'
            }, {
                '--y': '68px',
                '--scale': .4,
                duration: .325,
                onStart() {
                    toggle.classList.add('star-round')
                }
            }, {
                '--y': '-80px',
                '--scale': 1,
                duration: .45,
                ease: 'power2.out',
                onStart() {
                    input.checked = !input.checked
                    setTimeout(() => toggle.classList.remove('star-round'), 100)
                }
            }, {
                '--y': '0px',
                duration: .45,
                ease: 'power2.in',
                onComplete() {
                    toggle.classList.add('star-bottom')
                    setTimeout(() => toggle.classList.remove('star-bottom'), 200)
                }
            }, {
                '--toggle-y': '3px',
                duration: .2
            }, {
                '--toggle-y': '0px',
                '--face-scale': input.checked ? 1 : .4,
                '--face-tear-o': input.checked ? 1 : 0,
                '--face-tear-y': input.checked ? '0px' : 0,
                '--face-tear-s': input.checked ? 1.5 : 1,
                duration: .125
            }, {
                '--face-scale': 1,
                '--face-tear-o': 0,
                '--face-tear-y': input.checked ? '4px' : 0,
                '--face-tear-s': input.checked ? 2.5 : 1,
                duration: .15
            }],
            clearProps: true,
            onComplete() {
                toggle.classList.remove('animated')
            }
        })

        gsap.to(toggle, {
            keyframes: [{
                '--hole-scale': .8,
                duration: .5,
                ease: 'elastic.out(1, .75)'
            }, {
                '--hole-scale': 0,
                duration: .2,
                delay: .2
            }]
        })

        gsap.to(toggle, {
            '--rotate': '360deg',
            duration: 1.55,
            clearProps: true
        })
    })
})