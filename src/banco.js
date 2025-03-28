import mysql from 'mysql2'; //importando o módulo

//conectando e passando mensagem(de erro ou sucesso)
const conexao = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password:'',
  database: 'escola-api'
});

conexao.connect( erro  => {
  if(erro){
    console.error(`Erro ao conhectar: ${erro.message}`);
  } else {
     console.log(`Banco de dados conectando com sucesso`);
  }
});
//exportando o rescurso
export default conexao;