![objects](https://user-images.githubusercontent.com/53875554/176593886-1ecc2eea-d92d-4673-a0aa-c9490665bee4.jpg)
![objects](https://img.shields.io/static/v1?label=node&message=14.18.1&color=<COLOR>)
![objects](https://img.shields.io/static/v1?label=mongodb&message=5.0&color=<COLOR>)

# Introduction to Biblioteca back-end
API desenvolvida para leitura e inserção de dados relativos ao cadastro de livros

# Installation
Install Mongodb e node, o mongo por ser um pouco mais complexo necessita de seguir os tutoriais segundo é oferecido na documentação deles https://www.mongodb.com/docs/manual/installation/, escolha o SO e execute os comandos inclusive o de criação de um DB e uma collection, para criar basta inserir os seguintes códigos:
1º use biblioteca
2º db.books.insert(name: "livro teste", author: "Machado de Assis", date:"30/06/1888")
3º show collection

Assim, com banco criado basta instalar os frameworks e dependências do back end usando `npm install --save express body-parser cors mongoose`.
Rode o node app em um terminal para subir o back-end, navegue até a porta `http://localhost:3000/books` que app será automaticamente carregado e verá o "livro teste" que inserimos no terminal mongo

# Techniques
Fora implementado um padrão MVC usando os métodos get e post para renderização dos livros e inserção dos livros 
