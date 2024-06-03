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

