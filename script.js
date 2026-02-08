//btn menu home
$(document).ready(function() {
    // Abre e fecha o menu ao clicar no botão
    $('.btn-mobile').on('click', function(e) {
        e.stopPropagation(); // Impede que o clique no botão "suba" para o document
        $('.mobile-menu').toggleClass('active');
        
        const icon = $(this).find('i');
        icon.toggleClass('fa-bars fa-xmark');
    });

    // Fecha o menu automaticamente ao clicar em qualquer link
    $('.mobile-list a').on('click', function() {
        fecharMenu();
    });

    // NOVA FUNÇÃO: Fecha ao clicar fora
    $(document).on('click', function(e) {
        const menu = $('.mobile-menu');
        const btn = $('.btn-mobile');

        // Se o clique NÃO foi no menu E NÃO foi no botão, e o menu está aberto
        if (!menu.is(e.target) && menu.has(e.target).length === 0 && !btn.is(e.target) && btn.has(e.target).length === 0) {
            if (menu.hasClass('active')) {
                fecharMenu();
            }
        }
    });

    // Função auxiliar para evitar repetição de código
    function fecharMenu() {
        $('.mobile-menu').removeClass('active');
        $('.btn-mobile i').addClass('fa-bars').removeClass('fa-xmark');
    }
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

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7 // Ativa quando 70% do card estiver na tela
    };

    const observerOptionss = {
        root: null,
        // O segredo está aqui: reduzimos a área de detecção para uma faixa 
        // estreita no centro da tela (entre 40% e 45%)
        rootMargin: '-40% 0px -45% 0px', 
        threshold: 0
    };

    //mobile animação   
    if (window.innerWidth <= 1024) {
        const observerOptions = {
            root: null,
            // Foco centralizado: ativa quando o card passa pelo meio da tela
            rootMargin: '-40% 0px -45% 0px', 
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-mobile');
                } else {
                    entry.target.classList.remove('active-mobile');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.item-consulta').forEach(item => {
            observer.observe(item);
        });
    }
    //animação rolar secção
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = 0; // Ajuste aqui a altura do seu header
                const targetPosition = targetElement.offsetTop - headerHeight;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 800; // Tempo da animação em milissegundos
                let start = null;

                // Função que cria o movimento suave
                window.requestAnimationFrame(function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    
                    // Cálculo matemático para suavizar (ease out)
                    const scrollY = startPosition + distance * (progress / duration);
                    
                    window.scrollTo(0, scrollY);

                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    } else {
                        window.scrollTo(0, targetPosition); // Garante que pare no lugar exato
                    }
                });
            }
        });
    });




const btnTop = document.getElementById("btnTop");
    const footerArea = document.getElementById("meuFooter");

    // Observador para mostrar o botão apenas quando chegar no footer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                btnTop.classList.add("visible");
            } else {
                btnTop.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.1 // Aparece quando 10% do footer surgir
    });

    observer.observe(footerArea);

    // Função de rolagem suave
    function topFunction() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    let mybutton = document.getElementById("btnTop");

// Quando o usuário rolar a página, verifica se mostra o botão
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.classList.add("show");
    } else {
        mybutton.classList.remove("show");
    }
}

// Função para subir ao topo com suavidade
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Aqui acontece a mágica da animação de subida
    });
}
    

