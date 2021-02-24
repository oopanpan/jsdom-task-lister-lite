document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  const ul = document.querySelector('ul#tasks')

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const text = form.querySelector('input');
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    delButton.classList.add('button')
    delButton.innerText = 'X'
    ul.appendChild(li);
    li.innerText = text.value + " ";
    li.appendChild(delButton);
  })
  ul.addEventListener('click', function(e){
    if (e.target.classList.value === 'button'){
      e.target.parentElement.remove()
    }
    else if (e.target.tagName.toUpperCase() === 'LI'){
      alert(e.target.innerText)
    }
  })
});

