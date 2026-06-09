    //A: Classe Produto
class Produto {
    public nome: string;
    public descricao: string;
    public preco: number;
    public marca: string;
    public categoria: string;

    constructor(
        nome: string,
        descricao: string,
        preco: number,
        marca: string,
        categoria: string
    ) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.marca = marca;
        this.categoria = categoria;
    }
}

//B: Classe Venda
class Venda {
    public listaProdutos: Produto[];

    constructor(listaProdutos: Produto[]) {
        this.listaProdutos = listaProdutos;
    }

    public totalVenda(): number {
        let soma: number = 0;
        for (const item of this.listaProdutos) {
            soma += item.preco;
        }
        return soma;
    }
}

//C: Criando produtos e realizando a soma
const notebook = new Produto(
    "Notebook Ultrabook",
    "Notebook leve com processador i5 e 8GB de RAM",
    3200.00,
    "Samsung",
    "Informática"
);

const mouseGamer = new Produto(
    "Mouse Gamer RGB",
    "Mouse com 6400 DPI e iluminação RGB",
    180.00,
    "Logitech",
    "Periféricos"
);

const carrinho = new Venda([notebook, mouseGamer]);
const total = carrinho.totalVenda();

console.log("Resumo do Carrinho");
console.log(`${notebook.nome} - R$ ${notebook.preco.toFixed(2)}`);
console.log(`${mouseGamer.nome} - R$ ${mouseGamer.preco.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);