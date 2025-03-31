
// CRUD para Filmes
const filmesKey = 'filmes';
document.querySelector('#filmes form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.querySelector('#fm_nome').value;
    const categoria = document.querySelector('#fm_cat-nova').value;
    const imagem = document.querySelector('#fm_image-url').value;
    const trailer = document.querySelector('#fm_content').value;

    
    createItem(filmesKey, { nome, categoria, imagem, trailer });
    let option = document.createElement('option')
    option.innerText = nome
    option.setAttribute('value', nome)
    document.querySelector('#pf_filme-favorito').append(option)
    alert('Filme salvo com sucesso!');

    renderFilmes();
});

function renderFilmes() {
    renderItems(filmesKey, 'filmes-list', (filme, index) => {
        // Converte a URL do vídeo para o formato de incorporação, se necessário
        let trailerUrl = filme.trailer;
        if (trailerUrl.includes('watch?v=')) {
            trailerUrl = trailerUrl.replace('watch?v=', 'embed/');
        }

        const item = document.createElement('div');
        item.style.marginBottom = '15px'; // Adiciona espaçamento entre os itens
        item.innerHTML = `
            <img src="${filme.imagem}" alt="${filme.nome}" style="width: 150px; height: auto; display: block; margin-bottom: 10px;">
            <strong>${filme.nome}</strong> - ${filme.categoria}
            <br>
            <iframe width="560" height="315" src="${trailerUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br>
            <button onclick="deleteFilme(${index})">Excluir</button>
        `;
        return item;
    });
}

function deleteFilme(index) {
    
    deleteItem(filmesKey, index);
    renderFilmes();
}

renderFilmes();
