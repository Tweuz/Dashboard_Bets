# UA4 – TypeScript

## Objetivo
O objetivo desta atividade foi criar um protótipo para um site de vendas, utilizando TypeScript, que demonstre a modelagem de produtos e o cálculo de vendas para apresentar aos acionistas da organização, conforme as tarefas solicitadas no desafio oficial.

## Funcionalidades Implementadas
- **Criação de Classe Produto:** Desenvolvimento de uma classe `Produto` em TypeScript, contendo pelo menos 5 atributos (como nome, descrição, preço, marca e categoria).
- **Criação de Classe Venda:** Implementação de uma classe `Venda` que recebe um array de produtos e possui um método para somar todos os valores.
- **Simulação de Venda:** Criação de produtos e cálculo do valor total do carrinho de compras.

## Como Executar o Projeto (Passo a Passo)

Esta unidade envolve código de programação. Siga estas instruções para rodar o projeto no seu computador:

### 1. Ferramentas Necessárias
Para rodar o código TypeScript, você precisará instalar:
- **Node.js:** O ambiente que executa o código. Baixe em: [nodejs.org](https://nodejs.org/).
- **VS Code:** Para visualizar o código de forma organizada.
- **TypeScript:** O compilador que transforma o código `.ts` em `.js`.

### 2. Preparação do Ambiente
Abra o seu terminal (ou o terminal do VS Code) e instale o TypeScript com o comando:
```bash
npm install -g typescript
```

### 3. Executando o Código
1.  **Abra a pasta:** No VS Code, abra a pasta `UNIDADE_4`.
2.  **Compilação:** No terminal, digite o comando abaixo para gerar o arquivo JavaScript:
    ```bash
    tsc desafio.ts
    ```
3.  **Execução:** Agora, rode o arquivo gerado com o Node.js:
    ```bash
    node desafio.js
    ```
4.  **Resultado:** Você verá o resumo do carrinho e o valor total da venda aparecendo no seu terminal.

## Arquivos Entregues
- `Desafio da UA 4.pdf`: Documentação técnica com a descrição do desafio.
- `desafio.ts`: Código-fonte original em TypeScript.
