const btn = document.querySelector('#openOverlay');
const overlay = document.createElement('div');
const overlayDiv = document.createElement('div');
const content = document.createElement('div');
const closeBtn = document.createElement('a');

overlay.appendChild(overlayDiv);
overlayDiv.appendChild(content);
overlayDiv.appendChild(closeBtn);

overlay.classList.add('overlay');
overlayDiv.classList.add('overlayDiv');
closeBtn.classList.add('close');

content.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit aspernatur harum facilis amet quia laboru';
closeBtn.textContent = 'X';


btn.addEventListener('click', function(){
    document.body.appendChild(overlay);
})

closeBtn.addEventListener('click', function(event){
    document.body.removeChild(overlay);
})

overlay.addEventListener('click', function(event){
    if (event.target == overlay){
        document.body.removeChild(overlay);
    }
})