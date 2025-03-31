import express from 'express';
import { ler, inserir } from './src/aluno.js';

const app = express();
const porta = 3000;

//habilitando para dar suporte ao formato JSON
app.use(express.json());

//habilitando para dar suporte a dados inseridos a partir de inputs de formulários

app.use(express.urlencoded({extended:true}) );


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
  res.send(`Exibindo dados de UM aluno`);
  
  //ler(res);
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
    res.send(`Atulizando dados do aluno`);
});

//Excluindo aluno
app.delete('/alunos/:id', (req,res) =>{
  res.send(`Aluno excluido com sucesso!`);
});

app.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`);
});
