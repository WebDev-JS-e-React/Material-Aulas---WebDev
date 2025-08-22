// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function(){
    mostrarPosts();
    carregarPosts();

    document.querySelector("#postForm").addEventListener("submit", addPost);
    document.querySelector('#postList').addEventListener('click', handleClick);
};

function handleClick(infosDoEvento) {
  const action = infosDoEvento.target.dataset.action;
  const index = infosDoEvento.target.dataset.index;

  if (action === "Editar"){
    editarPosts(index);
  }
  else if (action === "Apagar"){
    deletarPosts(index);
  }

}

//CREATE

function addPost(infosDoEvento){
  infosDoEvento.preventDefault();

  const textoPost = document.querySelector("#postText").value;
  const categoriaPost = document.querySelector("#postCategory").value;
  const imagemPost = document.querySelector("#postImage").value;
  
  const novoPost = {
    text: textoPost, 
    category: categoriaPost,
    image: imagemPost,
    date: new Date().toLocaleString()
  }

  posts.unshift(novoPost)

  salvarPosts();
  document.querySelector('#postForm').reset();

  mostrarPosts();

}

//READ

function mostrarPosts(){
//Pegando elemento onde os tweets serão inseridos
  const listaPosts = document.querySelector("#postList")
  listaPosts.innerHTML = ""

//Passando pela array criando um tweet para cada um
  posts.forEach((pegaItem,index) => {
    const cardPost = document.createElement("div")
    cardPost.classList.add("card")

    cardPost.innerHTML = `
    <h2>${pegaItem.text}</h2>
    <img src="${pegaItem.image}"/>
    <h5>Categoria: ${pegaItem.category}</h5>
    <h5>Data e hora: ${pegaItem.date}</h5>
    <button data-action="Editar" data-index="${index}">Editar</button>
    <button data-action="Apagar" data-index="${index}">Apagar</button>
    `
    listaPosts.append(cardPost)
  })
}

//UPDATE
function editarPosts(index){
  const novoTexto = prompt('Edite seu post', posts[index].text);
  posts[index].text = novoTexto;

  mostrarPosts();

  salvarPosts();
}
//DELETE
function deletarPosts(index){
  const confirmar = confirm("Você deseja realmente excluir?")

  if(confirmar){
    posts.splice(index,1);
    salvarPosts();
  }
  
  mostrarPosts();
}

function salvarPosts(){
  localStorage.setItem("posts", JSON.stringify(posts));
}

function carregarPosts(){
  const postsGuardados = localStorage.getItem("posts");
  if (postsGuardados){
    posts = JSON.parse(postsGuardados)
  }
}
// const pessoa = {
//    nome: "nat",
//    idade: 18,
//    "Empresas trabalhadas": [],
//    isAdmin: true
// }

// console.log(pessoa.nome)
// console.log(pessoa[idade])