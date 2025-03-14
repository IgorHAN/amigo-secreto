let amigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");
  if (amigo.value == "") {
    alert("Por favor informar um nome valido");
    return;
  }
  if (amigo.value == amigos.length){
    alert("Esse nome já foi adiconado, por favor verifique");
    return;
  }

  let listaAmigos = document.getElementById("lista-amigos");
  amigos.push(amigo.value);
  if (listaAmigos.textContent == "") {
    listaAmigos.textContent = amigo.value;
  } else {
    listaAmigos.textContent = listaAmigos.textContent + ", " + amigo.value;
  }

  amigo.value = "";
}

function sortear() {
  if (amigos.length < 4) {
    alert("Por favor inserir mais de quatro participantes");
    return;
  }

  embaralha(amigos);
  let sorteio = document.getElementById("lista-sorteio");
  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + "->" + amigos[0] + "<br>";
    } else {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + "->" + amigos[i + 1] + "<br>";
    }
  }
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  amigos = []; // Esvazia a lista
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
