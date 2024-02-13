async function apiProdutos() {
    try {
        const api = await fetch (`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`)
        const resposta = await api.json();
        contextCreate(resposta.products)
    } catch(error) {
        console.log(error);
    }
}

apiProdutos()


function contextCreate(resposta) {

    const sectionImg = document.querySelector('.product-image');

    if(resposta) {
        const map = resposta.map((value) => {
            const createElementImg = document.createElement('img');
            sectionImg .appendChild(createElementImg);
            return createElementImg.src = value.image
        })
        console.log(map)
    }

}

contextCreate();