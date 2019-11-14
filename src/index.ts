import { Carro } from './Carro'
import { Pessoa } from './Pessoa';
import { Concessionaria } from './Concessionaria'

//instânciar a classe Carro - criando Object
let carrodetres = new Carro("carrodetres", 3);
console.log(carrodetres);

//instânciar a classe Carro - criando Object Fusca
let fusca = new Carro("Fusca", 2);
console.log(fusca);

let gol = new Carro("Gol", 4);
console.log(gol);

let ge = new Pessoa("Geysa", "Gol");
console.log(ge);

let concess = new Concessionaria('sete de stembro', [
  'tl-1971',
  'lamborguine',
  'brasilia',

])
console.log(concess)


