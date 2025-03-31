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

