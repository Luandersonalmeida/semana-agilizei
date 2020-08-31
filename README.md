Sobre o projeto

O projeto consiste na automação de testes de interface de um site utilizando Cypress.

Setup 

Primeiramente, é necessário instalar o Node.js

Para inicializar o projeto, basta digitar no terminal (dentro da pasta do projeto):

npm install

Após, para rodar os testes, digitar no terminal:

npm run cy:open ou npx cypress open

Para executar testes sem navegador (modo headless):

npm run cy:run ou npx cypress run

Execução com Cucumber
Neste projeto, foi implementado o framework Cucumber.

Para executá-lo:

npm run cy:open:cucumber e/ou npm run cy:run:cucumber (modo headless)

Reports 

Para gerar relatórios, foram usados dois reports generators:

Mochawesome
Cucumber HTML Reports
Gerando relatório com Mochawesome:
npm run report:merge & npm run report:mocha

Gerando relatório com Cucumber HTML Reports:
npm run report:cucumber

Integração contínua

Foi utilizado o Github Actions para a integração contínua do projeto, e o GitHub Pages para publicar os relatórios em formato .html
