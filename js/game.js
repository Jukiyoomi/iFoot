let minutes = 5, seconds = 0;
let clock = document.querySelector('div')
let text = document.querySelector('.info')
const joueurs = document.querySelectorAll('.player')
const scores = document.querySelectorAll('.score')
let cron;
let goalDistance;
let grid = document.querySelector('.container-grid')

let storing = localStorage.getItem("Joueurs")
let players = storing.split(',')

console.log(players)
joueurs[0].innerText = players[0]
joueurs[1].innerText = players[1]

start()

window.onload = reset()
for (let i = 0; i < scores.length; i++) { 
    scores[i].addEventListener('click',() => {
        // if (goalDistance == 4) {
        
        //     if (scores[0].innerText - scores[1].innerText == 4) {
        //         grid.innerHTML += `<p class="courage">Courage ${joueurs[1].innerText}</p>`
        //     }
        //     if (scores[1].innerText - scores[0].innerText == 4) {
        //         grid.innerHTML += `<p class="courage">Courage ${joueurs[0].innerText}</p>`
        //     }
        //     setTimeout(() => {
        //         grid.lastChild.remove()
        //     }, 3500);
        //     goalDistance = Math.abs(scores[0].innerText - scores[1].innerText);
        // } 
        scores[i].innerText++
        // goalDistance = Math.abs(scores[0].innerText - scores[1].innerText);
        
        // console.log(grid.lastChild)
        // console.log(goalDistance)
    })
}



function reset () {
    scores.forEach(score => {
        score.innerText = 0
    })
}
function start() {
    pause()
    // console.log(cron)
    cron = setInterval(() => { startTimer(); }, 1000);
    
}

function pause() {
    clearInterval(cron)
}

function startTimer() {
    seconds--
    if (seconds < 0) {
        if (minutes <= 0) {
            // pause()
            // seconds = 0
            text.innerText = 'Terminé !!'
            clearInterval(cron)
            scores.forEach(s => {
                s.classList.add('inactive')
            })

            setTimeout(() => {
                if (scores[0].innerText < scores[1].innerText) {
                    text.innerText = `Vainqueur: ${players[1]}`
                }
                if (scores[0].innerText > scores[1].innerText) {
                    text.innerText = `Vainqueur: ${players[0]}`
                }
                if (scores[0].innerText == scores[1].innerText) {
                    text.innerText = `Egalité parfaite`
                }
            }, 2000);
            let match = `${players[0]} : ${scores[0].innerText} - ${scores[1].innerText} : ${players[1]}`
            storeLocally(match)

            setTimeout(() => {
                window.location = '../pages/histo.html'
            }, 6000);
            return
        } else {
            seconds = 59
            minutes--
        }
        console.log(cron)
    }
    setTimeValue()
}

function storeLocally(params) {
    let d = new Date()
    let day = d.getDate()
    let month = d.getMonth() + 1
    let year = d.getFullYear()
    let registerday = `${day}/${month}/${year}`
    let f = 1
    localStorage.setItem(`day${f}`,registerday);
    localStorage.setItem(`match${f}`,params);
    f++
    console.log(localStorage)
}

function setTimeValue() {
    document.getElementById('minute').innerText = returnData(minutes);
    document.getElementById('second').innerText = returnData(seconds);
}
setTimeValue()

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}