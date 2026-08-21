##Requisito
*Node.js 22 ou superior 

##Sequencia para criar projeto 

Criar o arquivo peckage
---
npm init
---

Instalar o Express para gerenciar as requisiçoes, rotas e utils, entre outras finalidades. 
---
$ npm i express
---

Instalar os pacotes para suporte ao TypeScript
---
npm i --save-dev @types/express
npm i --save-dev@types/node
---

Instalar o compilador do projeto com TypeScript e reiniciar o projeto quando o arquivo é modificado.
---
npm i --save-dev ts-node
---

Compilar o arquivo TypeScript
---
npx tsc
---
