export class Concessionaria{ 

  //atributo 
  private endereco: string;
  private listadeCarros: Array;

  constructor(endereco: string, listadeCarros: Array<Carro>){
    this.endereco = endereco
    this.listadeCarros = listadeCarros;
  }

  //metodos 

  public fornecerEndereco(): string{
    return this.endereco;
      
  }

  public monstarListadecarros(): Array<Carro>{
    //logica
    return this.listadeCarros;

  
  }

}