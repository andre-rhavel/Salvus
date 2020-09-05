# Salvus
*Passo a Passo para executar o aplicativo:
-Abrir o VScode
-Digitar no terminal: npm install
-Digitar no terminal: npm start



 
-Testando a Aplicação no Postman:
Caso queira testar as API's criadas no projeto, primeiro baixe o Postman. Depois de realizar o download do Postman, basta agora realizar os passos abaixo para poder testar cada API criada!

Host:
http://localhost:5000

ROTA:						Descrição:
/api/patients			GET		Selecionar Todos
/api/patients			POST		Adicionar Paciente
/api/patients/:id		GET		Selecionar Por Id
/api/patients/:id		PUT		Atualizar Por Id
/api/patients/:id		DELETE		Excluir Por Id

entity.json:
 {
   "nome": String,
   "idade": Number,
   "peso": Number,
   "altura": Number,
   "status": Boolean
 }
