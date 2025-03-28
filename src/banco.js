import mysql from 'mysql2'; //importando o módulo

//armazenando os dados de conexão
const conexao = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password:'',
  database: 'escola-api'
});

//conectando e passando mensagem(de erro ou sucesso)
conexao.connect( erro  => {
  if(erro){
    console.error(`Erro ao conhectar: ${erro.message}`);
  } else {
     console.log(`Banco de dados conectando com sucesso`);
  }
});

//exportando o rescurso
export default conexao;