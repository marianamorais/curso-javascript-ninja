/* 1 */
var script = {};

/* 2 - 3 - 4 - 5 */
var pessoa = {
 nome: 'Mariana',
 sobrenome: 'Morais',
 sexo: 'Feminino',
 idade: 23,
 altura: 1.68,
 peso: 70,
 andando: false,
 caminhouQuantosMetros: 0
};

pessoa.fazerAniversario = function() {
  pessoa.idade++;
};

pessoa.andar = function(metros) {
  pessoa.caminhouQuantosMetros += metros;
  pessoa.andando = true;
};

pessoa.parar = function() {
  pessoa.andando = false;
};

pessoa.nomeCompleto = function() {
  return "Olá! Meu nome é " + pessoa.nome + ' ' + pessoa.sobrenome + ' !';
};

pessoa.mostrarIdade = function() {
  return 'Ola! eu tenho ' + pessoa.idade + ' anos!'
};

pessoa.mostrarPeso = function() {
  return 'Eu peso ' + pessoa.peso + ' Kg.'
};

pessoa.mostrarAltura = function() {
  return 'Minha altura é ' + pessoa.altura + ' m.'
};

pessoa.nomeCompleto();
pessoa.mostrarIdade();
pessoa.mostrarPeso();
pessoa.mostrarAltura();

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

pessoa.mostrarIdade();

pessoa.andar(20);
pessoa.andar(100);
pessoa.andar(150);

pessoa.andando;
pessoa.parar();
pessoa.andando;

pessoa.caminhouQuantosMetros;

pessoa.apresentacao = function() {
  var sexo = 'o';
  var idadeAnos = 'anos';
  var metrosCaminhados = 'metros';

  if (pessoa.idade === 1) {
    idadeAnos = 'ano'
  }

  if (pessoa.caminhouQuantosMetros === 1) {
    metrosCaminhados = 'metro';
  }

  return 'Olá, eu sou ' + sexo + ' ' + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + ' ' + idadeAnos + ', ' + pessoa.altura + ', meu peso é ' + pessoa.peso + ' e, só hoje, eu já caminhei ' + pessoa.caminhouQuantosMetros + ' ' + metrosCaminhados + '!';
};

pessoa.apresentacao();
