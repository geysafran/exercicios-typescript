
export class Pessoa {
  private nome: string;
  private carroPreferido: string;
  //private carro: string;

  //constructor
  constructor(nome: string, carroPreferido: string) {
    this.nome = nome;
    this.carroPreferido = carroPreferido;
  }

  //metodos
  public dizerNome(): string {
    return this.nome;
  }

  public dizerCarroPreferido(): string {
    return this.carroPreferido;
  }
  /* public comprarCarro(): boolean {
     this.carroPreferido = this.carroPreferido;
    } */
  /* public dizerCarroQueTem(): string {
     this.carro = this.carro;
     } */
}

//let pessoinha = new Pessoas()
//console.log(pessoinha);
