const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const container = document.getElementById("container");

openBtn.addEventListener('click', () =>{
  container.classList.add('active');
});

closeBtn.addEventListener('click', () =>{
  container.classList.remove('active')
})