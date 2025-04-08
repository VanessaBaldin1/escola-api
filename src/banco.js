import mysql from 'mysql2'; //importando o módulo

//armazenando os dados de conexão/ conexão local
//const conexao = mysql.createConnection({
 // host:'localhost',
  //user: 'root',
  //password:'',
 // database: 'escola-api'
//});

//CONEXÂO REMOTA
const conexao = mysql.createConnection({
  host:'db4free.net',
  user: 'vanessasenac252',
  password:'SenacPenha25',
  database: 'escola_api25'
});





//conectando e passando mensagem(de erro ou sucesso)
conexao.connect( erro  => {
  if(erro){
    console.error(`Erro ao conhectar: ${erro.message}`);
  } else {
     console.log(`Banco de dados conectando em: ${conexao.config.host}.`);
     //apresenta o host no qual estamos conectado.
  }
});

//exportando o rescurso
export default conexao;