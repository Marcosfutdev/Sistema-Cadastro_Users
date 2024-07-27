Sistema de Cadastro de Usuários.

O que é o projeto?
Esse é um simples sistema de cadastro de usuários, onde temos um CRUD. C = create == criar, R = read == leitura, U = update == modificação, D = delete = apagar.
Onde neste sistema podemos criar um usuário, buscar esses usuários,  modificar o registro de um usuário, deletar um registro de um usuário.

Em que tecnologias foi feito o projeto?
O front-end foi feito com React;
O back-end foi feito com uma API em Node e um banco de dados em MONGODB.

Como executar cada parte do projeto?
O front-end e back-end devem ser executados simultaneamente!
Como executar o front-end:
- Clone esse repositório;
- Dentro da pasta do projeto "sistema_users", instale as dependências, através do "npm install";
- Depois das dependências instaladas e dentro da pasta do projeto, execute o comando "npm run dev";
  Aqui só será possível observar a parte visual, não terá as funcionalidades!

Como executar o back-end:
- Clone o meu próximo repositório chamado "API Sist_Users";
- Dentro da pasta do projeto "api", instale as dependências, através do "npm install";
- Ainda dentro da pasta "api", vá no arquivo "express.js", dentro de app.use(cors({origin:'coloque a URL em que seu clone do front-end está sendo executado, o localhost e a porta'}));
  Essa parte é para o back-end se conectar com o front-end. Porque o CORS é basicamente um protocolo que não permite uma URL diferente se conectar com outra URL, por exemplo,
  O front-end está sendo executado em uma porta e o back-end em outra. O CORS não permite! Por isso na parte citada anterior, verifique a porta em que o front-end está sendo executado, e coloque dentro
  daquele techo de código que eu cite. Para a API se conectar corretamente com o front-end. Exemplo: 'http://localhost:5000' .
- Crie um banco de dados grátis através do site do MONGODB, onde lá ele vai pedir para você criar um usuário e senha para o conectar com o seu banco. Não esqueça esses dados! Pois com eles vamos se
  conectar ao seu banco!
  -Para conectar a API com o banco de dados, vá em src/database, dentro do arquivo "connect.js", no trecho do código "await mongoose.connect("coloque a o trecho que o MONGODB disponibiliza para
  você se conectar com o banco!"); Exemplo: "mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@users.560rfik.mongodb.net/?retryWrites=true&w=majority&appName=users";
  Coloque o seu e coloque as variáveis de ambiente como está aí no exemplo! Se baseie neste exemplo! Apenas na parte das váriaveis de ambiente!
  - Dentro da raiz da pasta "api" você vai criar um arquivo chamado ".env", onde dentro dele você vai criar variáveis de ambiente, chamadas:
    MONGODB_USER=nome do seu usuário do banco
    MONGODB_PASSWORD=sua senha do banco
  Dessa mesma forma que está, só coloque seu usuário e senha.
 -Agora por fim, na raiz da pasta da api execute o comando "npm run start:dev".

Se você for testar e acontecer algum erro, fale comigo!!
