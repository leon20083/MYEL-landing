$(document).ready(function(){
    $(".slide-one").owlCarousel({
        loop: 1,
        items: 1,
        nav: true,
        navText: ["<img src='img/arrow_left.png'>", "<img src='img/arrow_right.png'>"],
    });
    $(".slide-two").owlCarousel({
        loop: true,
        margin: 27,
        items: 3,
        nav: true,
        dots: true,
        navText: ["<img src='img/arrow_left.png'>", "<img src='img/arrow_right.png'>"],
    });
  });

  const buttons = document.getElementsByClassName('modal-button');
  for(let button of buttons){
    button.addEventListener('click', openModal);
  }
  const modalContainer = document.getElementById('modal__container');
  modalContainer.addEventListener('click', closeModal);

  function openModal(){
    modalContainer.classList.add('active');
  }

  function closeModal(event){
    if(event.target.id == 'modal__container'){
        if(!modalContainer.classList.contains('active')) return;
        modalContainer.classList.remove('active');
    }
  }

  