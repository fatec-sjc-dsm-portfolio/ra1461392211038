document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    { id: 1, title: 'API do Primeiro Semestre Service Desk - (2022)', description: 'De modo geral, uma Central de Serviços é uma ferramenta que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação. O objetivo era desenvolver uma central de ajuda com assuntos relacionados à tecnologia. Neste projeto foi realizado uso pela primeira vez da metodologia ágil SCRUM pela equipe, aprendendo a trabalhar seguindo esse metodo. Foram utilizadas algumas das seguintes tecnologias: HTML, CSS, JavaScript, Python, Flask e MySQL.' },
    { id: 2, title: 'API do Segundo Semestre Daily Bot - (2022)', description: 'Projeto com a proposta de desenvolver Crawler que consiga buscar, ler o arquivo e identificar o conteúdo relacionado aos Professores Associados, realizar os cruzamentos necessários com as bases de dados de associados, que suportarão está solução, gravar todos os processos publicados relacionados aos associados, e emitir relatório diário para que a equipe consiga disparar os e-mails para os professores citados no Diário Oficial. Caso consigam também realizar a automação do disparo destes e-mails seria uma sofisticação para a solução.' },
    { id: 3, title: 'API do Terceiro Semestre Sistema para Gerir Cobranças - (2023)', description: 'Em modo geral, uma Central de Serviços é uma ferramenta que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação. Este projeto será realizado baseado na metodologia ágil SCRUM, que foca no desenvolvimento da proatividade, autonomia e uma melhora da produtividade do time como um todo. Em modo geral, uma Central de Serviços é uma ferramenta que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação. Este projeto será realizado baseado na metodologia ágil SCRUM, que foca no desenvolvimento da proatividade, autonomia e uma melhora da produtividade do time como um todo.' },
    { id: 4, title: 'Projeto 4', description: 'Descrição do Projeto 4' },
    { id: 5, title: 'Projeto Y - (2023)', description: 'Descrição do projeto Y...' },
    { id: 6, title: 'Projeto Z - (2023)', description: 'Descrição do projeto Z...' },
  ];

  const model = [
    { id: 1, title: 'Service Desk - (2022)', description: 'Neste projeto colaborei no processo de desenvolvimento do frontend das páginas, além de criar o backend e lógica de rotas para a comunicação com o backend. Como primeiro projeto utilizando Flask e Javascript, houve momentos desafiadores visto que era uma novidade para todos da equipe. Entretanto consegui desenvolver minha parte junto de minha equipe, fazendo assim meu primeiro projeto web mais robusto no qual aprendi muitas coisas que levo até hoje.' , image: 'assets/img/1api.png' },
    { id: 2, title: 'Daily Bot - (2022)', description: 'Projeto com a proposta de desenvolver Crawler que consiga buscar, ler o arquivo e identificar o conteúdo relacionado aos Professores Associados, realizar os cruzamentos necessários com as bases de dados de associados, que suportarão está solução, gravar todos os processos publicados relacionados aos associados, e emitir relatório diário para que a equipe consiga disparar os e-mails para os professores citados no Diário Oficial. Caso consigam também realizar a automação do disparo destes e-mails seria uma sofisticação para a solução.', image: 'assets/img/1api.png' },
    { id: 3, title: 'Sistema para Gerir Cobranças - (2023)', description: 'Esse sistema foi desenvolvido para...', image: 'assets/img/1api.png' },
    { id: 4, title: 'Projeto X - (2023)', description: 'Detalhes do projeto X...', image: 'assets/img/1api.png' },
    { id: 5, title: 'Projeto Y - (2023)', description: 'Detalhes do projeto Y...', image: 'assets/img/1api.png' },
    { id: 6, title: 'Projeto Z - (2023)', description: 'Detalhes do projeto Z...', image: 'assets/img/1api.png' },
  ];

  const projetosContainer = document.querySelector('.projetos-container');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalImage = document.getElementById('modal-image');

  // Cria os cards dos projetos
  projects.forEach((project) => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('projeto-item');
      projectCard.setAttribute('data-id', project.id);

      const projectTitle = document.createElement('h3');
      projectTitle.textContent = project.title;

      const projectDescription = document.createElement('p');
      projectDescription.textContent = project.description;

      // Adiciona o conteúdo do card
      projectCard.appendChild(projectTitle);
      projectCard.appendChild(projectDescription);
      
      // Adiciona o card à container de projetos
      projetosContainer.appendChild(projectCard);

      // Ação de abrir o modal
      projectCard.addEventListener('click', () => {
          const selectedProject = model.find(item => item.id === project.id);
          if (selectedProject) {
              modalTitle.textContent = selectedProject.title;
              modalDescription.textContent = selectedProject.description;
              modalImage.src = selectedProject.image; // Adiciona a imagem
              modal.style.display = 'flex'; // Abre o modal
          }
      });
  });

  // Fechar modal
  closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none'; // Fecha o modal
  });
});