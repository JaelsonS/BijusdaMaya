(function() {
    // Animação ao rolar: fade-up nos elementos com classe .fade-up
    const fadeElements = document.querySelectorAll('.fade-up');
    
    if (fadeElements.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            // opcional: continuar observando não precisa, mas deixamos para aparecer uma vez
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -10px 0px" });
      
      fadeElements.forEach(el => observer.observe(el));
    }
    
    // garantir que mesmo elementos que já estejam visíveis recebam a classe
    // fallback manual: se já estiver visível, adicionar appear
    const checkAlreadyVisible = () => {
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight - 100) {
          el.classList.add('appear');
        }
      });
    };
    window.addEventListener('load', checkAlreadyVisible);
    window.addEventListener('scroll', checkAlreadyVisible);
    
    // pequeno efeito suave para links internos (caso queira manter tudo estável)
    // adicionar comportamento hover em cards galeria (somente visual)
    const galleryImages = document.querySelectorAll('.gallery-item');
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        // apenas simulação: não faz nada agressivo, mas dá um toque divertido
        // podemos exibir um alert bem delicado (opcional e infantil)
        // mas como não é solicitado, apenas faz um leve feedback visual (piscadinha)
        img.style.transform = 'scale(0.98)';
        setTimeout(() => { img.style.transform = ''; }, 150);
      });
    });
    
    // Exibir uma saudação no console amigável
    console.log("🌸 Site da Maya Valentina carregado com muito amor! 💖");
    
    // bônus: melhorar acessibilidade e prevenir qualquer erro de imagens
    const allImgs = document.querySelectorAll('img');
    allImgs.forEach(img => {
      img.setAttribute('loading', 'lazy');
      if(!img.hasAttribute('alt')) img.setAttribute('alt', 'Bijuteria artesanal Maya Valentina');
    });
  })();