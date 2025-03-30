// Função para obter dados do localStorage
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// Função para salvar dados no localStorage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Função para criar um item
function createItem(key, item) {
    const data = getData(key);
    data.push(item);
    saveData(key, data);
}

// Função para ler todos os itens
function readItems(key) {
    return getData(key);
}

// Função para deletar um item
function deleteItem(key, index) {
    const data = getData(key);
    if (index >= 0 && index < data.length) {
        data.splice(index, 1);
        saveData(key, data);
    }
}

// Função para renderizar itens
function renderItems(key, containerId, renderCallback) {
    const items = readItems(key);
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpa o contêiner antes de renderizar
    items.forEach((item, index) => {
        const element = renderCallback(item, index);
        container.appendChild(element);
    });
}

// CRUD para Filmes
const filmesKey = 'filmes';
document.querySelector('#filmes form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.querySelector('#fm_nome').value;
    const categoria = document.querySelector('#fm_cat-nova').value;
    const imagem = document.querySelector('#fm_image-url').value;
    const trailer = document.querySelector('#fm_content').value;

    createItem(filmesKey, { nome, categoria, imagem, trailer });
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

// CRUD para Séries
const seriesKey = 'series';
document.querySelector('#series form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.querySelector('#serie_nome').value;
    const genero = document.querySelector('#serie_genero').value;
    const descricao = document.querySelector('#serie_descricao').value;
    const imagem = document.querySelector('#serie_imagem').value;

    createItem(seriesKey, { nome, genero, descricao, imagem });
    alert('Série salva com sucesso!');
    renderSeries();
});

function renderSeries() {
    renderItems(seriesKey, 'series-list', (serie, index) => {
        const item = document.createElement('div');
        item.style.marginBottom = '15px';
        item.innerHTML = `
            <img src="${serie.imagem}" alt="${serie.nome}" style="width: 150px; height: auto; display: block; margin-bottom: 10px;">
            <strong>${serie.nome}</strong> - ${serie.genero}
            <p>${serie.descricao}</p>
            <button onclick="deleteSerie(${index})">Excluir</button>
        `;
        return item;
    });
}

function deleteSerie(index) {
    deleteItem(seriesKey, index);
    renderSeries();
}

renderSeries();

// CRUD para Hobbies
const hobbiesKey = 'hobbies';
document.querySelector('#hobbies form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.querySelector('#hobbie_nome').value;
    const descricao = document.querySelector('#hobbie_descricao').value;

    createItem(hobbiesKey, { nome, descricao });
    alert('Hobbie salvo com sucesso!');
    renderHobbies();
});

function renderHobbies() {
    renderItems(hobbiesKey, 'hobbies-list', (hobbie, index) => {
        const item = document.createElement('div');
        item.style.marginBottom = '15px';
        item.innerHTML = `
            <strong>${hobbie.nome}</strong>
            <p>${hobbie.descricao}</p>
            <button onclick="deleteHobbie(${index})">Excluir</button>
        `;
        return item;
    });
}

function deleteHobbie(index) {
    deleteItem(hobbiesKey, index);
    renderHobbies();
}

renderHobbies();

// CRUD para Músicas
const musicasKey = 'musicas';
document.querySelector('#musicas form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.querySelector('#musica_nome').value;
    const artista = document.querySelector('#musica_artista').value;
    const genero = document.querySelector('#musica_genero').value;
    const imagem = document.querySelector('#musica_imagem').value;

    createItem(musicasKey, { nome, artista, genero, imagem });
    alert('Música salva com sucesso!');
    renderMusicas();
});

function renderMusicas() {
    renderItems(musicasKey, 'musicas-list', (musica, index) => {
        const item = document.createElement('div');
        item.style.marginBottom = '15px';
        item.innerHTML = `
            <img src="${musica.imagem}" alt="${musica.nome}" style="width: 150px; height: auto; display: block; margin-bottom: 10px;">
            <strong>${musica.nome}</strong> - ${musica.artista}
            <p>${musica.genero}</p>
            <button onclick="deleteMusica(${index})">Excluir</button>
        `;
        return item;
    });
}

function deleteMusica(index) {
    deleteItem(musicasKey, index);
    renderMusicas();
}

renderMusicas();
