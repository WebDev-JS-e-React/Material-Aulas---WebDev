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

// Inicialização
window.onload = function() {
    loadPosts();
    displayPosts();

    document.getElementById('postForm').addEventListener('submit', addPost); 
    document.getElementById('postList').addEventListener('click', handlePostListClick);
};

// ---------- Funções Auxiliares ----------

// Função para lidar com cliques na lista de posts
function handlePostListClick(event) {
    const clickedElement = event.target.closest("button"); // garante que pega o botão
    if (!clickedElement) return;

    const action = clickedElement.dataset.action;
    const index = clickedElement.dataset.index;

    if (action === "edit") {
        editPost(index);
    } else if (action === "delete") {
        deletePost(index);
    }
}

// Função para salvar no LocalStorage
function savePosts() {
    localStorage.setItem("posts", JSON.stringify(posts));
}
// Função para carregar os posts do LocalStorage
function loadPosts() {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
        posts = JSON.parse(storedPosts);
    }
}

// CREATE
function addPost(event) {
    event.preventDefault();
    
    const postText = document.getElementById('postText').value;
    const postCategory = document.getElementById('postCategory').value;
    const postImage = document.getElementById('postImage').value;
    const postDate = new Date().toLocaleString(); 

    const post = { 
        text: postText, 
        category: postCategory, 
        image: postImage, 
        date: postDate 
    };
    
    posts.unshift(post);
    savePosts(); // salva no localStorage
    
    document.getElementById('postForm').reset();
    displayPosts();
}

// READ
function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach((pegaPost, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('card-post');
  
            postElement.innerHTML = `
                <p>${pegaPost.text}</p>
                ${pegaPost.image ? `<img src="${pegaPost.image}" alt="Imagem do post" style="max-width:150px;">` : ""}
                <p><em>Categoria: ${pegaPost.category}</em></p>
                <p><em>Data e Hora: ${pegaPost.date}</em></p>
                <button data-action="edit" data-index="${index}"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
                <button data-action="delete" data-index="${index}"><i class="fa-solid fa-eraser"></i> Apagar</button>
                <hr style="margin:30px;">`;
               
            postList.append(postElement);
        });
}

//UPDATE
function editPost(index) {
    const novoTexto = prompt("Editar post:", posts[index].text);
    if (novoTexto !== null) {
        posts[index].text = novoTexto;
        savePosts();
        displayPosts();
    }
}
//DELETE
function deletePost(index) {
    const confirmar = confirm("Tem certeza que deseja apagar este post?");
    if (confirmar) {
        posts.splice(index, 1);
        savePosts();
        displayPosts();
    }
}