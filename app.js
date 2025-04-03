import express from 'express';
import { ler, inserir, lerUM, excluir, atualizar } from './src/aluno.js';
import cors from 'cors';


const app = express();
//comando para acessar a melhor portal disponivel da hospedagem
const porta = process.env.PORT || 3000;

//habilitando para dar suporte ao formato JSON
app.use(express.json());

//habilitando para dar suporte a dados inseridos a partir de inputs de formulários

app.use(express.urlencoded({extended:true}) );


app.use(cors());


//Raiz da API

app.get('/', (req, res) =>{
 res.send(`API utilizando Node.js, Express e MySQL`);
});

//Exibindo todos os alunos
app.get('/alunos',(req, res) =>{
  //res.send(`Exibindo todos os alunos`);
  ler(res);

});

//Exibindo Um aluno
app.get('/alunos/:id',(req, res) =>{
  //res.send(`Exibindo dados de UM aluno`);
 
  //capturando o ID que vem do endpoint

  const id = parseInt(req.params.id);

  //chamando a função
  lerUM(id, res);


});

//Inserindo/Cadastrando/ um aluno
app.post('/alunos',(req, res) =>{
  //res.send(`Inserindo um alunos`);

  //capturar os dados a partir do corpo da requisição
  const novoAluno = req.body;

  //executando a funação inserir e passando os parâmetro novoAluno e res
  inserir(novoAluno, res);

});

//Atualizando aluno
app.patch('/alunos/:id', (req, res) =>{
   // res.send(`Atulizando dados do aluno`);

   //capturar id
   const id = parseInt(req.params.id);

   //pegando as informações do body
   const aluno = req.body;

   atualizar(id, aluno, res);
});

//Excluindo aluno
app.delete('/alunos/:id', (req,res) =>{
  //res.send(`Aluno excluido com sucesso!`);

  //capturando o id
  const id = parseInt(req.params.id);

  excluir(id, res);

});

app.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`);
});
