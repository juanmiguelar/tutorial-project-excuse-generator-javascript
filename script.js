

function createExcuse() {
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let indexWho = getRandomInt(0, who.length - 1);
    let indexAction = getRandomInt(0, action.length - 1);
    let indexWhat = getRandomInt(0, what.length - 1);
    let indexWhen = getRandomInt(0, when.length - 1);

    let excuse = who[indexWho] + " " + action[indexAction] + " " + what[indexWhat] + " " + when[indexWhen];

    document.getElementById('excuse').innerText = excuse;
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

createExcuse();