
const mudarTema = document.querySelector('#change-theme');
const container = document.querySelector('.main-page-config');


mudarTema.addEventListener('click', function(e){
    e.preventDefault();
    container.classList.add('dark-theme');

    

})
mudarTema.addEventListener('dblclick', function(e){
    e.preventDefault();
    container.classList.remove('dark-theme');
})



