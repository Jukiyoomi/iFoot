let versusers = localStorage.getItem("Joueurs");
let players = versusers.split(',')
// let p;
let f = document.querySelectorAll('.container p')
// const btnValid = document.querySelector('.valid')

f[0].textContent = players[0]
f[1].textContent = players[1]

console.log(players);
console.log(localStorage)
localStorage.clear()
let storing = localStorage.setItem("Joueurs", players);

// btnValid.addEventListener('click', () => {
//     partOne.classList.add('disappear')
//     partTwo.classList.remove('disappear')
//     // select.forEach(s => {
//     //     console.log(s.value)
//     // })
// })

    setTimeout(() => {
        activateArrow()
    }, 1500);

function round(x) {
    return Math.ceil(x / 500) * 500;
}

function activateArrow() {
    let animating = picker.animate(
        [
            { transform: 'rotate(0)' },
            { transform: 'rotate(360deg)' }
        ], {
        fill: 'forwards',
        iterations: 1 * round(cron) / 1000,
        // easing: 'steps(4, end)',
        duration: 1000
    }
    );
    if ((round(cron) % 1000) == 0) {
        beginner = players[0]
    } else {
        beginner = players[1]
    }
    setTimeout(() => {
        info.innerText = `${beginner} commence`
        btnValid.classList.remove('disappear')
        console.log(btnValid)
    }, round(cron) + 1000);
}