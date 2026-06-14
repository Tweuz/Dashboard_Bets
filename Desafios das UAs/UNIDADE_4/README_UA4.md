# Avaliação Final – Interação Humano-Computador (IHC)

## Identificação do Estudante

- Nome: Mateus Onival Araujo de Moraes
- Matrícula: 22402037
- Curso: Ciência da Computação
- Polo: CEUB ASA NORTE
- Data de Entrega: 14/06/2026

## Descrição Geral

Este documento apresenta a atividade desenvolvida especificamente para a **Unidade de Aprendizagem 4 (UA4)** da disciplina de Interação Humano-Computador (IHC). 

---

## UA4 – TypeScript

### Objetivo
O objetivo desta atividade foi criar um protótipo para um site de vendas, utilizando TypeScript, que demonstre a modelagem de produtos e o cálculo de vendas para apresentar aos acionistas da organização, conforme as tarefas solicitadas no desafio oficial.

### Funcionalidades Implementadas
O arquivo `desafio.ts` cria duas classes em TypeScript para simular um carrinho de compras simples:

- **Classe Produto:** Representa um produto com os atributos: `nome`, `descricao`, `preco`, `marca` e `categoria`. Todos os valores são passados no momento em que o objeto é criado através do construtor.
- **Classe Venda:** Recebe um array de produtos no construtor. Possui o método `totalVenda()` que percorre a lista de produtos e soma os preços, retornando o valor total da compra.
- **Simulação de Venda:** No exemplo de uso, dois produtos são criados e inseridos em um objeto `Venda`. O total é calculado e exibido no terminal.

**Trecho do Código Implementado:**

![Código UA4](https://private-us-east-1.manuscdn.com/sessionFile/9f8HyZL2qV2YRvYRnzUoZ9/sandbox/OkvPSE21LLvFDLuPiiooav-images_1781445802232_na1fn_L2hvbWUvdWJ1bnR1L1VBNF9pbWFnZS0wMDQ.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOWY4SHlaTDJxVjJZUnZZUm56VW9aOS9zYW5kYm94L09rdlBTRTIxTEx2RkRMdVBpaW9vYXYtaW1hZ2VzXzE3ODE0NDU4MDIyMzJfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwxVkJORjlwYldGblpTMHdNRFEucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YNTLGMrlbJeEiXO5J6OcvLUoUlxFBXB0Im3cI~QPYTC3LfzRxt4uSkGWvuugNWL~dw1Y9W5GvCuavu3gwqhpKNgg6TqgvfyhTrkGeeNvqGK7UPDzZ0D--GDGBaIti4VZy3HF~BKww28wvPpdzJACwoEPD59ol4DAaC~gr7LVQZTYmjETl8k9dFPLB4n4mGa6PY9Me5n4sbZe6YhpWhI6pUHCE2JodMUjRvn0BPXnbFxYuizrccWzqa61ki-Zre6UuN0x~i-LX06flR-~wM7mKXb-HGpFqWTssSUAKeruH2RZ1vUfHeuulITKurZpE6gwHwpj0gKb06mF5uKzhZE1kg__)

**Saída no Terminal:**
```text
Resumo do Carrinho
Notebook Ultrabook - R$ 3200.00
Mouse Gamer RGB - R$ 180.00
Total: R$ 3380.00
```

### Como Executar o Projeto (Passo a Passo)

Esta unidade envolve código de programação. Siga estas instruções para rodar o projeto no seu computador:

#### 1. Ferramentas Necessárias
Para rodar o código TypeScript, você precisará instalar:
- **Node.js:** O ambiente que executa o código. Baixe em: [nodejs.org](https://nodejs.org/).
- **VS Code:** Para visualizar o código de forma organizada.
- **TypeScript:** O compilador que transforma o código `.ts` em `.js`.

#### 2. Preparação do Ambiente
Abra o seu terminal (ou o terminal do VS Code) e instale o TypeScript com o comando:
```bash
npm install -g typescript
```

#### 3. Executando o Código
1.  **Abra a pasta:** No VS Code, abra a pasta `UNIDADE_4`.
2.  **Compilação:** No terminal, digite o comando abaixo para gerar o arquivo JavaScript:
    ```bash
    tsc desafio.ts
    ```
3.  **Execução:** Agora, rode o arquivo gerado com o Node.js:
    ```bash
    node desafio.js
    ```

*Dica: Você também pode usar o `ts-node` para rodar diretamente sem compilar (`npm install -g ts-node` e depois `ts-node desafio.ts`).*

### Arquivos Entregues
- `Desafio da UA 4.pdf`: Documentação técnica com a descrição do desafio.
- `desafio.ts`: Código-fonte original em TypeScript.

---

## Considerações Finais

Usar TypeScript para essa atividade foi bem bacana porque a tipagem deixa o código mais seguro. Criar o carrinho de compras com as classes Produto e Venda facilitou o entendimento de como estruturar os dados.

---

## Declaração de Autoria

Declaro que este trabalho foi desenvolvido por mim, respeitando as normas acadêmicas e de integridade estabelecidas pela instituição.

**Nome do Estudante:** Mateus Onival Araujo de Moraes

**Data:** 14/06/2026
