$(document).ready(function() {
    $('.btn-mobile').on('click', function () {
        $('.mobile-menu').toggleClass('active');
        $('.btn-mobile').find('i').toggleClass('fa-x');
});
});

//btn faq
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Abre ou fecha o item clicado
    item.classList.toggle('active');
  });
});