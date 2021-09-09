const number = document.querySelector('input[type="number"]')
const btnSub = document.querySelector('button[type="submit"]')
const container = document.querySelector('.container-name-input')
const btn = document.querySelector('.enter')
const btnRemove = document.querySelector('.remove')
const name = document.querySelector('.names')
const btnValid = document.querySelector('.valid')
const partOne = document.querySelector('.part-one')
const partTwo = document.querySelector('.part-two')
const select = document.querySelectorAll('select')
const options = document.querySelectorAll('option')
const picker = document.querySelector('.picker')
const info = document.querySelector('.info-begin')


let beginner;
let cron = Math.trunc(Math.random() * 1500 + Math.random() * 5000);
let nom = ''
let names = []