const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json';

async function getDisplayMakeUp() {
    try {
        const response = await fetch(apiUrl);
        
        if(!response.ok) {
            throw new Error('Erro ao obter os dados da MakeUp')
        }
        
        const data = await response.json();
        const productsCardsHTML = createCards(data);

        const productsContainer = document.getElementById('products-container');
        productsContainer.innerHTML = productsCardsHTML;

    } catch (error) {
        console.log('Ocorreu um erro: ', error);
    }
}

/*
 * Função para gerar os Cards
 */

function createCards(products) {
    let productCards = '';

    const first90Elements = products.slice(0, 16);

    first90Elements.forEach((product, index) => {
        const card = `
        <div class='card'>
            <h2>${product.name}</h2>
            <p>Marca: ${product.brand}</p>
            <p>Descrição: ${product.description}</p>
            <p><img src=${product.api_featured_image} alt=${product.product_link}</p>
        </div>
        `;

        productCards += card;
    });
    
    return `<div class="card-container">${productCards}</div>`;
}




getDisplayMakeUp();
