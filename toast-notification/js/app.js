const container = document.querySelector('.container');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () =>{
  createNotification();
})

function createNotification(){
  const notification = document.createElement('div');
  notification.classList.add('toast');

  container.appendChild(notification);
  notification.innerText = 'Hello I\'m Abdullabek'

  setTimeout(() => {
    notification.remove()
  }, 3000)

}