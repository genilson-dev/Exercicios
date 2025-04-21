Criar um novo repositório e conectar ao GitHub
Se deseja criar um projeto local e depois vinculá-lo ao GitHub, siga estas etapas:

a) Inicializar o repositório local
Abra o projeto no VS Code ou crie um novo diretório.

No terminal do VS Code (atalho: `Ctrl+``), execute:

bash
git init
Isso inicializa um repositório Git local.

b) Adicionar arquivos e fazer o primeiro commit
Adicione os arquivos com:

bash
git add .
Faça o primeiro commit:

bash
git commit -m "Primeiro commit"
c) Conectar ao repositório remoto
Adicione a URL do repositório remoto:

bash
git remote add origin https://github.com/genilson-dev/Exercicios.git
Envie os arquivos locais para o GitHub:

bash
git push -u origin main
Nota: Substitua main pelo nome da branch, se necessário.
Calculadora de Soma
Este é um simples programa em JavaScript que realiza a soma de dois números e exibe o resultado no console.

Como funciona
O código faz o seguinte:

Declara duas variáveis, num1 e num2, e atribui a elas valores numéricos.

Declara uma terceira variável, soma, que recebe o resultado da soma de num1 e num2 utilizando o operador de adição (+).

Utiliza o console.log() para exibir o resultado da soma.

# Use o seguinte codigo para instalar o testing Library.
npm install --save-dev jest

crie um arquivo chamado soma.test.js

Como executar os testes
Certifique-se de que o Jest está instalado no projeto.

No terminal, execute o comando:

bash
npx jest

