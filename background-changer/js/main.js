const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = bgColor();
})

function bgColor(){
  return `hsl(${Math.floor(Math.random() * 360)}, 100%,50%)`
}