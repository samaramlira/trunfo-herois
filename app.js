var carta1 = {
    nome: "Homem Aranha",
    imagem : "https://s2.glbimg.com/_Fwiu91PWeerTn8sEsAgauNZyyc=/362x536/https://s2.glbimg.com/0XNrPBunUoZnkQWB3W6bMl3Fmhc=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/t/4/bVpPzHQv6jDw3WNLgG3g/2019-595-filmes-sony-homem-aranha-poster.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta2 = {
    nome: "Capitão América",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/06/Captain-America.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2 
    }
  };
  
  var carta3 = {
    nome: "Homem de Ferro",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/02/homem-de-ferro-tony-divulgacao.jpg",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  };
  
  var carta4 = {
    nome: "Flash",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauLJ-I9PclQWpOgCMar1eWUF_BWP3Efn7eyWE_R2OmKNyFjg0LaO7wLpdtDeudeU61t0&usqp=CAU",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 8
    }
  };
  
  var carta5 = {
    nome: "Arqueiro",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/07/20200415-arrow-1200x675-1.jpg",
    atributos: {
      ataque: 10,
      defesa: 8,
      magia: 4
    }
  };
  
  var carta6 = {
    nome: "Super Girl",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/08/supergirl.jpg",
    atributos: {
      ataque: 7,
      defesa: 9,
      magia: 9
    }
  };
  
  var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
   var numeroCartaMaquina = parseInt(Math.random() * 6); 
    cartaMaquina = cartas[numeroCartaMaquina];
    
    var numeroCartaJogador = parseInt(Math.random() *6);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 6);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
   
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById ("resultado");
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = "<p class='resultado-final'>VENCEU</p>";
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>EMPATOU</p>";
    }
    divResultado.innerHTML = htmlResultado;
    
    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
   // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width:inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id ='opcoes' class='carta-status'>";
    
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina () {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
   // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width:inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id ='opcoes' class='carta-status'>";
    
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p type='texto' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }