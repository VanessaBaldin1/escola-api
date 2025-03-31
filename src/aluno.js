import conexao from './banco.js';

/*Funções para o CRUD */
// Função para exibir todos os alunos do banco
function ler(res){

  //Seleciona todos os registro e exibi em ordem nome
  const sql = "SELECT * FROM alunos ORDER BY nome";

  //Executando a query a partir da conexão
  conexao.query(sql, (erro, resultados) => {

    if(resultados === 0){
        res.status(204).end();
        return; //forçar a interrupção do código
    }
      //verificação básica de erro
    if(erro){
        //se erro, exibir status 400 e informar qual foi o erro
        res.status(400).json(erro.code);
    } else { 
        //se der certo apresenta o status 200 e exibe o resultado(no formato json)
        res.status(200).json(resultados);
    }


  });

}

// Função para cadastrar alunos no banco (verifique "?")

function inserir(aluno, res) {
  const sql = "INSERT INTO alunos SET ?";

  conexao.query(sql, aluno, (erro) => {
    if(erro){
      res.status(400).json(erro.code);
    } else {
      res.status(201).json({"status" : "aluno inserido!"});
    }


  });
}

export { ler, inserir };