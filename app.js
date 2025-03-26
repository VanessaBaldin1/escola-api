import express from 'express';

const app = express();
const porta = 3000;

//Raiz da API

app.get('/', (req, res) =>{
 res.send(`API utilizando Node.js, Express e MySQL`);
});

//Exibindo todos os alunos
app.get('/alunos',(req, res) =>{
  res.send(`Exibindo todos os alunos`);
});

//Exibindo Um aluno
app.get('/alunos/1',(req, res) =>{
  res.send(`Exibindo dados de UM aluno`);
});

//Inserindo/Cadastrando/ um aluno
app.post('/alunos',(req, res) =>{
  res.send(`Exibindo todos os alunos`);
});

//Atualizando aluno
app.patch('alunos/1', (req, res) =>{
    res.send(`Atulizando dados do aluno`);
});

//Excluindo aluno
app.delete('alunos/1', (req,res) =>{
  res.send(`Aluno excluido com sucesso!`);
});

app.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`);
});
