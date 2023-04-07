const cookie = document.querySelector('.cookie');
const openedCookie = document.querySelector('.opened-cookie');
const btn = document.querySelector('#btn');

const pharses = [
  'Seu código vai rodar sem nenhum bug', 
  'Nunca faltará café na sua casa/trabalho',
  'Você só esqueceu de fechar aquela função com um colchete, relaxa',
  'Código feito é melhor que código perfeito',
]

const randomPharses = Math.floor(Math.random() * pharses.length);

function toogleCookie() {
  cookie.classList.toggle('hide');
  openedCookie.classList.toggle('hide');

  btn.querySelector('div').innerText = `${pharses[randomPharses]}`
}

btn.addEventListener('click', toogleCookie);

