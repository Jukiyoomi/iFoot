
// number.addEventListener('mousemove', () => {
//     JoueurNum = number.value
// })
// btn.addEventListener('click', () => {
//     container.innerHTML = ''
//     name.innerText = ''
//     names = []
//     for (let i = 1; i <= number.value; i++) {
//         container.innerHTML += `<input type="text" name="" id="" class="players" placeholder="Enter a name of player">`
//     }
//     // console.log(number.value)
// })

// btnRemove.addEventListener('click', () => {
//     name.innerText = ''
//     names = []
//     console.log(name.innerText)
//     if (container.childElementCount > 0) {
//         container.removeChild(container.lastElementChild)
//         container.childElementCount--
//     } else return
// })

btnSub.addEventListener('click', () => {
    let players = document.querySelectorAll('input[type="text"]')

    players.forEach(p => {
        names.push(p.value)

    })
    name.style.display = 'block'
    if (name.innerText != 'Les joueurs sont:') name.innerText = 'Les joueurs sont:'
    for (let i = 0; i < names.length; i++) {
        // nom = ''
        if (i < names.length - 1) nom = ` ${names[i]}, `
         else nom = ` ${names[i]}.`
        name.innerText += nom
    }
    console.log(names)
})

btnValid.addEventListener('click', () => {
    localStorage.setItem("Joueurs", names);
    window.location = '../pages/versus.html'
})
