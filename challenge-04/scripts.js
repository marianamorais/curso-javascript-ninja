/* 1 - 2 - 3 */

var isTruthy = function(a) {
  return !!a;
};

/* todos os tipos de valores `falsy`.*/

isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy('');
isTruthy(0);
isTruthy(-0);
isTruthy(NaN);

/* 10 valores `truthy */

isTruthy(1);
isTruthy('Mariana');
isTruthy([]);
isTruthy({});
isTruthy(function () {});
isTruthy('Study JS');
isTruthy(10 * 10);
isTruthy(10 + 10);
isTruthy([1, 2, 3]);
isTruthy({ a: 1, b: 2 });

/* 4 */

var carro = {
  marca: 'Fiat',
  modelo: 'Palio',
  placa: 'A-1234',
  ano: 2015,
  cor: 'Branco',
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0
};

/* 5 */

carro.mudaCor = function(cor) {
  carro.cor = cor;
};

/* 6 */

carro.obterCor = function(){
  return carro.cor;
};

/* 7 */

carro.obterModelo = function(){
  return carro.modelo;
};

/* 8 */

carro.obterMarca = function(){
  return carro.marca;
};

/* 9 */

carro.obterModeloMarca = function() {
  return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo() + ' .';
};

/* 10 */

carro.adicionarPessoas = function(numeroPessoas){
  var totalPessoas = carro.quantidadePessoas + numeroPessoas;
  if (carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
    return 'O carro está lotado.'
  }

  if ( totalPessoas > carro.assentos ) {
    var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
    var pluralOuSingular = quantasPessoasCabem === 1 ? 'pessoa' : ' pessoas';
    return 'So cabem mais' + quantasPessoasCabem + + pluralOuSingular + '.';
  }

  carro.quantidadePessoas += numeroPessoas;
  return 'Temos ' + totalPessoas + ' pessoas no carro.';
}

/* 11 */

carro.obterCor();
carro.mudaCor('Preto');
carro.obterCor() // Preto
carro.mudaCor('Vermelho')
carro.obterCor();
carro.obterMarcaModelo();
carro.adicionarPessoas(2);
carro.adicionarPessoas(4);
carro.adicionarPessoas(3);
carro.adicionarPessoas(-4);
carro.adicionarPessoas(10);
carro.quantidadePessoas;
