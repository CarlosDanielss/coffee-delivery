# Coffee Delivery

<img src="https://i.imgur.com/1Wi5t7a.png" />

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Stack Utilizada](#stack-utilizada)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Contato](#contato)

## Sobre o Projeto

Coffee Delivery é uma aplicação de entrega de café. Com uma interface intuitiva, permite aos usuários escolher uma variedade de cafés artesanais e bebidas especiais para entrega rápida e conveniente.

## Stack Utilizada

**Front-end:** 
- [react](https://react.dev/)
- [react-router-dom](https://reactrouter.com/en/main)
- [styled-components](https://styled-components.com/)
- [phosphor-react](https://phosphoricons.com/)
- [react-hook-form](https://www.react-hook-form.com/)
- [zod](https://zod.dev/)
- [sonner](https://sonner.emilkowal.ski/)
- [aos](https://michalsnik.github.io/aos/)

## Funcionalidades

- Listagem de produtos (cafés) disponíveis para compra
- Adicionar uma quantidade específicas de itens no carrinho
- Aumentar ou remover a quantidade de itens no carrinho
- Exibir o total de itens no carrinho no Header
- Formulário para o usuário preencher o seu endereço (com consulta de cep)
- Exibir o valor total da soma de itens no carrinho multiplicados pelo valor

## APIs Utilizadas
Neste projeto, foram utilizadas as seguintes APIs para melhorar as funcionalidades e a experiência ao utilizar a aplicação.

- [IBGE API](https://servicodados.ibge.gov.br/api/docs/localidades)
  - Descrição: Esta API permite obter o conjunto completo de distritos brasileiros, oferecendo detalhes atualizados sobre cada região, facilitando a implementação de funcionalidades baseadas em localização dentro da aplicação.

- [ViaCEP API](https://viacep.com.br/)
  - Descrição: Esta API permite aos usuários obter detalhes completos de endereços a partir de um CEP fornecido, oferecendo dados como rua, bairro, cidade e estado.

## Pré-requisitos

Para começar a trabalhar no projeto do Coffee-Delivery, certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- **Node.js:** O projeto depende do Node.js para execução de scripts. Se você não tiver o Node.js instalado, poderá baixá-lo em [https://nodejs.org/](https://nodejs.org/).

## Instalação

Siga estas etapas para colocar o projeto em funcionamento:

1. Clone o repositório
```sh
git clone https://github.com/CarlosDanielss/coffee-delivery.git
```
2. Navegue até o diretório do projeto
```sh
cd coffee-delivery
```
3. Instale dependências
```sh
npm install
```
4. Inicie o servidor de desenvolvimento
```sh
npm run dev
```
