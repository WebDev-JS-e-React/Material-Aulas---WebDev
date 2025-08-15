function executarPush() {
  const array = ['🍎', '🍌'];
  array.push('🍇'); // Adiciona '🍇' ao final do array
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop(); // Remove o último elemento do array
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift(); // Remove o primeiro elemento do array
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift('🍎'); // Adiciona '🍎' ao início do array
  const resultado = 'Resultado da operação unshift';
  document.getElementById('resultado-unshift').textContent = resultado;
}

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes('🥝');
  document.getElementById('resultado-includes').textContent = resultado;
}

function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  array.reverse(); // Inverte a ordem dos elementos no array
  const resultado = array;
  document.getElementById('resultado-reverse').textContent = resultado;
}

function executarSort() {
  const array = [3, 1, 4, 2,11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];
  array.sort((a, b) => b - a); // Ordena o array de números em ordem decrescente
  array2.sort().reverse(); // Ordena o array de strings em ordem alfabética e depois inverte a ordem

  const resultado = array;
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2;
  document.getElementById('resultado-sort2').textContent = resultado2;
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓']; // Extrai uma parte do array (do índice 1 ao 2)
  const resultado = array.slice(1, 3);
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  array.splice(1, 1, '🍓'); // Remove 1 elemento no índice 1 e adiciona '🍓'
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.indexOf('🍇'); // Retorna o índice do elemento '🍌'
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.join(' - '); // Junta os elementos do array em uma string
  document.getElementById('resultado-join').textContent = resultado;
}

function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  let resultado = "";
  array.forEach((fruta, i) => {
       resultado += `Item ${i + 1}: ${fruta}\n`;
      });
  document.getElementById('resultado-foreach').textContent = resultado;
}


function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map((fruta, i) => {
    return `✅${fruta}`;
  });
  document.getElementById('resultado-map').textContent = resultado;
}

 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map((item, i) => {
      return `<h2> Item ${i + 1}: </h2> <br> <h1> ${item} </h1> `;
    });
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');

  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter(fruta => fruta === '🍎');
  document.getElementById('resultado-filter').textContent = resultado;
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find(fruta => fruta === '🍇');
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.findIndex(fruta => fruta === '🍇');
  document.getElementById('resultado-findIndex').textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }, 0); // Soma todos os elementos do array
  document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = array.every(numero => numero > 5); // Verifica se todos os números são maiores que 5
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = array.some(fruta => fruta === '🥝'); // Verifica se pelo menos um elemento é '🥝'
  document.getElementById('resultado-some').textContent = resultado;
}



function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = jogos
    .filter(jogo => jogo.includes('e')) // Filtra jogos com mais de 5 letras
    .map(jogo => jogo.toLowerCase()) // Converte os jogos para minúsculas
    .sort(); // Ordena os jogos em ordem alfabética
  

  document.getElementById("resultado-encadeamento").textContent = resultado;
}
