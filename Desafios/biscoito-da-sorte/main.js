const cookie = document.querySelector('.cookie');
const openedCookie = document.querySelector('.opened-cookie');
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('.btn2');
const pharse = document.querySelector('.pharse');

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
  pharse.classList.remove('hide');
  btn2.classList.remove('hide');
  btn.disabled = true;
  
  btn.querySelector('.pharse').innerText = `${pharses[randomPharses]}`
  
}

function resetApp() {
  window.location.reload(true);
}

btn.addEventListener('click', toogleCookie);
btn2.addEventListener('click', resetApp);

