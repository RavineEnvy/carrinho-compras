let valorTotal = 0;

function textoInicial(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$0,00`;
}

textoInicial();

function adicionar(){
    //recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço, subtotal
    let preco = quantidade * valorProduto;
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`;
    //atualizar valor total da compra
    valorTotal = valorTotal + preco;

    let textoTotal = document.getElementById('valor-total');
    textoTotal.textContent = `R$${valorTotal},00`;
    document.getElementById('quantidade').value = '';
}

function limpar(){
    valorTotal = 0;
    textoInicial();
}