$(document).ready(function() {

// ---------PARTE DO CODIGO DEDICADA AOS CARROSEIS DE IMAGENS PRESENTES--------\\
//1º: carrosel referente as imagens sobre o raw/smackdown, primeria section
  $('.carrosel-img').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay:true,
    autoplaySpeed: 4000,
  });

  //2º: carrosel referente aos titulos na section titles, terceira section
  $('.nav-btns').slick({
    centerMode: true,
    arrows: false,
    autoplay: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // ---------PARTE DO CODIGO DEDICADA A CONTROLE DE DISPLAY DA TELA SOBRE A BRAND POS SELEÇAO INICIAL--------\\
  const links = document.querySelectorAll('.link');

  links.forEach(link =>{
    link.addEventListener('click', event => {
      event.preventDefault();

      // 1º: aqui fiz essa targetElement adicionar uma string pra nao ter problema em localizar o id
      const telaId = link.id
      const targetElement = document.getElementById(telaId + '-screen');

      //2º: Oculta todas as telas para nao ficarem nenhuma sobre a outra, sem ela a tela de escolha nao ia sumir
      //e a escolhida ia abrir por baixo
    document.querySelectorAll('.tela-inicial').forEach(screen => {
      screen.style.display = 'none';
    });

    if (targetElement) {
      targetElement.style.display = 'block';
      targetElement.classList.add('active');
    }
    })
  });
  

  // ---------PARTE DO CODIGO DEDICADA A TROCA DE BRAND VIA ESCOLHA INICAL E LABEL DE TROCA--------\\
  //1º: aqui ele adiciona a class para mostrar a tela azul caso selecionada inicialmente
  document.getElementById("smackDown").addEventListener("click", function() {
    document.body.classList.add('darkSD');
});

  //2º: aqui fiz um forEach porque e um looping de escolhas para poder trocar brand pos tela inicial
  //talvez pudesse ser melhor e mais simples, mas foi o melhor que pensei
const change = document.querySelectorAll('label');

change.forEach(alterate =>{
  alterate.addEventListener('click', event => {

    const telaRaw = document.getElementById('raw-screen');
    const telaSd = document.getElementById('smackDown-screen');

    if(telaRaw.classList.contains('active')){
      telaRaw.classList.remove('active');
      telaSd.classList.add('active');
      telaSd.style.display = 'block';
      document.body.classList.add('darkSD');
    } else{
      telaRaw.classList.add('active');
      telaRaw.style.display = 'block';
      telaSd.classList.remove('active');
      document.body.classList.remove('darkSD');
    }
  })
})
});

