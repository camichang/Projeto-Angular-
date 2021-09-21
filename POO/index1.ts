class Carro{
        portas!: Number
        tipo!: String
        cor!: String
    
        constructor(portas:number,tipo:string,cor:string){
            this.portas = portas
            this.tipo = tipo
            this.cor = cor
        }
        escreverPropriedades(){
            console.log(this.portas)
            console.log(this.tipo)
            console.log(this.cor)
        }
    }
    
    let carro = new Carro(2, "heitch", "branca")
    
    carro.escreverPropriedades();