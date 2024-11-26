# Chatbot com BlenderBot - Frontend e Backend

Este é um projeto simples de chatbot utilizando o modelo **BlenderBot** da Hugging Face. O projeto é dividido em duas partes:
- **Backend**: Um servidor Node.js com Express que faz a integração com a API da Hugging Face.
- **Frontend**: Um chat simples em HTML, CSS e JavaScript para interação com o chatbot.

## Tecnologias utilizadas

- **Backend**:
  - Node.js
  - Express
  - Axios (para fazer requisições HTTP)
  - API da Hugging Face (BlenderBot)

- **Frontend**:
  - HTML
  - CSS
  - JavaScript

## Funcionalidades

- O chatbot responde com base no modelo **BlenderBot**, que gera respostas de texto para as mensagens enviadas pelo usuário.
- O frontend é simples e permite enviar mensagens ao chatbot e exibir as respostas.
- O botão de enviar é centralizado e há um espaço confortável entre os campos de entrada e o botão.

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/chatbot-js.git
```
### 2. Instalar dependências
```bash
cd chatbot-js
npm install
```
### 3. Configurar variáveis de ambiente
Crie um arquivo .env na raiz do projeto e adicione sua chave de API da Hugging Face:
```bash
HUGGINGFACE_API_KEY=CHAVE_API
```
### 4. Executar o servidor
Inicie o servidor Node.js:
```bash
npm start
```
O servidor estará rodando em http://localhost:3000.