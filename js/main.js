document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.navbar-collapse').classList.remove('show');
    })
  });

  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const sectionQuemSomos = document.getElementById('quem-somos');
    observer.observe(sectionQuemSomos);
    
    const sectionMVPO = document.getElementById('mvpo');
    observer.observe(sectionMVPO);

    const sectionDepoimento = document.getElementById('depoimento');
    observer.observe(sectionDepoimento);

    const sectionServicos = document.getElementById('servicos');
    observer.observe(sectionServicos);

    const sectionCertificados = document.getElementById('certificados');
    observer.observe(sectionCertificados);

    const sectionFrota = document.getElementById('frota');
    observer.observe(sectionFrota);

    const sectionEquipe = document.getElementById('equipe');
    observer.observe(sectionEquipe);

    const sectionFooter = document.getElementById('footer');
    observer.observe(sectionFooter);

});

//Ajustar o navegamento em cada dispositivo.
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navHeight = document.getElementById('navbar').offsetHeight; // Obter a altura da barra de navegação

        window.scrollTo({
            top: targetElement.offsetTop - navHeight,
            behavior: 'smooth'
        });
        history.pushState(null, null, `#${targetId}`);
    });
});

