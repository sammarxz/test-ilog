# Teste front-end AngularJS na iLog
Bom, aqui está minha resolução do teste para a vaga de front-end developer na Ilog. O teste era pra criar um CRUD simples de Usuários e Cursos, o que faz sentido
pois são uma empresa de EAD. A partir da listagem de cursos, o usuário deve conseguir associar os alunos que já foram cadastrados na plataforma ao curso em questão.
Foi uma experiência legal para mim, pois além de criar algo, eu tive que aprender uma nova tecnologia, tive que sair da minha zona de conforto que era o ReactJS.

![Preview9iLog](https://github.com/sammarxz/test-ilog/blob/master/preview-ilog.png?raw=true)

### Regras Gerais:
* Pode consultar, usar APIs e frameworks abertos;
* Não pode reaproveitar sites/projetos anteriores seus;

### Algumas Regras do Desafio:
* Para a camada de visualização deve ser utilizado AngularJS(Angular 1);
* O sistema deve possuir rotas no client-side, para isso você deve utilizar ui-router;
* O sistema deve possuir uma estilização, fique a vontade de usar a imaginação nessa parte;

### Models:
* User
  * Nome
  * Telefone 
  * Endereço
  * Data de Admissão
* Course
  * Título
  * Descrição
  * Carga Horária
  * Valor (pode ser null)
  
### Diferenciais
* Estilização da interface utilizando Sass, ou algum framework visual (Bootstrap, AngularJS
Material, etc);
* Utilizar chamadas HTTP para consumir API’s de terceiros para alguma informação (Nome de
cursos, por exemplo..);
* Gerar um PDF com a relação de cursos e alunos inscritos.


## Como utilizar

##### Clonar o projeto e instalar dependências
```
$ git clone git@github.com:sammarxz/test-ilog.git
$ cd test-ilog
$ cd backend && npm install
```

##### Subir o backend
```
$ cd backend
$ npm start
```

##### Subir um servidor no frontend (pode ser com Python ou usando o LiveServer do Visual Studio Code ou o que tu quiser)
```
$ cd frontend
$ python -m http.server
```

##### Pronto, agora basta navegar pelo projeto


## ToDo's
* [ ] Saber como colocar `ng-model="Search"` pra funcionar, pois ele está criando um scopo interno e eu não descobri a tempo como **"passar o scopo interno de uma diretiva para o pai"** se a diretiva usa `transclude`
* [ ] Paginação
* [ ] Melhorar a geração de um PDF

---
### Se quiser ver o resultado sem precisar clonar o repositório, subi um vídeo no Youtube mostrando a aplicação:
[Preview Test iLog](https://www.youtube.com/watch?v=FH-5qSO-xjM)
