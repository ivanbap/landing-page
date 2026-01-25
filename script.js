$(document).ready(function() {
    // Abre e fecha o menu ao clicar no botão
    $('.btn-mobile').on('click', function() {
        $('.mobile-menu').toggleClass('active');
        
        // Troca o ícone de barras pelo de fechar (X)
        const icon = $(this).find('i');
        icon.toggleClass('fa-bars fa-xmark');
    });

    // Fecha o menu automaticamente ao clicar em qualquer link
    $('.mobile-list a').on('click', function() {
        $('.mobile-menu').removeClass('active');
        $('.btn-mobile i').addClass('fa-bars').removeClass('fa-xmark');
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

    const observers = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o card estiver visível (pelo menos 50% na tela)
            if (entry.isIntersecting) {
                entry.target.classList.add('active-mobile');
            } else {
                // Remove a classe quando o usuário continua rolando
                // Assim a animação acontece de novo se ele voltar
                entry.target.classList.remove('active-mobile');
            }
        });
    }, {
        threshold: 0.6 // Dispara quando 60% do card aparecer
    });

    // Seleciona todos os cards de especialidades
    document.querySelectorAll('.item').forEach(card => {
        observers.observe(card);
    });
