document.querySelector('.burger').addEventListener('click', nav);

function nav(){
    document.querySelector('nav').style.visibility = 'visible'   
};

document.querySelector('.closeMenu').addEventListener('click', navHide);

function navHide(){
    document.querySelector('nav').style.visibility = 'collapse'   
};




