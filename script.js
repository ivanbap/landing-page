const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Fecha outros itens abertos (opcional)
    faqItems.forEach(otherItem => {
      if (otherItem !== item) otherItem.classList.remove('active');
    });

    // Abre ou fecha o item clicado
    item.classList.toggle('active');
  });
});