document.addEventListener('DOMContentLoaded', () => {
    const btnCintura = document.querySelector("#btn1");
    const btnFecho = document.querySelector("#btn2");
    const btnPinca = document.querySelector("#btn3");
    const btnComprimento = document.querySelector("#btn4");
    const btnAmplitude = document.querySelector("#btn5");
    const btnBainha = document.querySelector("#btn6");
    const inspirar = document.querySelector("#inspire-se");
  
    // Função para adicionar ouvintes de clique
    const addClickListener = (element, url) => {
      element.addEventListener('click', () => {
        window.location.href = url;
      });
    };
  
    addClickListener(btnCintura, './cintura.html');
    addClickListener(btnFecho, './fecho.html');
    addClickListener(btnPinca, './pinca.html');
    addClickListener(btnComprimento, './comprimento.html');
    addClickListener(btnAmplitude, './amplitude.html');
    addClickListener(btnBainha, './bainha.html');
    addClickListener(inspirar, './inspirar.html');
  });
  