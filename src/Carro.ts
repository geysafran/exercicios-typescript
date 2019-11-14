//nome da classe

export class Carro{ 

  //atributo 
  private modelo: string;
  private numerodePortas: number;
  private velocidade: number = 0;

  constructor(modelo: string, numerodePortas: number){
    this.modelo = modelo;
    this.numerodePortas = numerodePortas;
  }

  //metodos 

  public acelerar(): void{
      this.velocidade = this.velocidade + 10;
  }

  public parar(): void{
    //logica
    this.velocidade = 0;

  
  }
  public velocidadeAtual(): number{
    return this.velocidade;
  
  }
}
//instanciar a classe >> Criando Object

// let carroA = new carro()
//console.log(carroA);
 


/*  //atributos
class Passaro{
  public pena: string;
  public genero: boolean;
  public especie: string;
//metodos
  public voa(): void{
    this.pena;

  }

  public anda(): void{
    this.genero;

  
  }
  public come(): number {
    return this.especie;

  
  }
} */

/* let passarinho = new Passaro()
console.log(passarinho); */

//atributos


/* //atributos
class Concess{
 private endereco: string;
 private listaDeCarros: string;

//metodos
  public fornecerEndereco(): void{
    this.endereco = this.endereco;
    

  }

  public montarListaDeCarros(): void{
    
  
  }
}

let concessionaria  = new Concess()
console.log(concessionaria); */

