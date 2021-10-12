import { Component, OnInit } from '@angular/core';
import { TelasService } from './telas.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  constructor(private telaService: TelasService) {}

  ngOnInit(){
    this.telaService.inicializar();
  }

  get showInicio(): boolean{
    return this.telaService.showInicio;
  }

  get showTabuleiro(): boolean {
    return this.telaService.showTabuleiro;
  }

  iniciarJogo(): void {
    this.telaService.iniciarJogo();
  }


  pontuacao = [0 , 0];
  personagens = [
    'pedra',
    'papel',
    'tesoura'
  ]
  player1 = -1;
  loading= false;
  isResultShow = false;
  
  /**
   * O resultado - 0 ganha
   *               1 perde
   *               2 empata
   */

  theResult = 0 
  computador  = -1;

 pick( personagens: number): void {
   
  /**
   * Impede que o o usuário aperte o botão durante o carregamento da pagina
   */

   if(this.loading) return;
   this.loading = true;
   this.player1 = personagens;

   /**
    * Cria um tempo para simular o turno do oponente
    */
  
   setTimeout( () => {
     this.loading = false;
     // gera um número entre 0 e 2 
     const randomNum =  Math.floor(Math.random() * 3 ) ;
     this.computador = randomNum;
     this.checkResult();
     this.isResultShow = true;
   },  Math.floor(Math.random() * 500 ) +200);
 }

 reset(): void {
  this.pontuacao = [0,0];
 }
 checkResult(): void {
   const escolhaPlayer1
    = this.player1;
   const escolhaComputador = this.computador;
   /**
    * Se o computador escolher o mesmo personagem que o jogador, terá um empate
    */
   if( escolhaPlayer1
     ==  escolhaComputador)
    {
    this.theResult = 2;
  }

  /**
   * Exemplo:
   * Jogador escolhe pedra (0) e o
   * computador escolhe papel (1)
   * O jogador perde porque ( 0 - 1 + 3 ) % 3 = 2
   */
  
    else if ( (escolhaPlayer1
       - escolhaComputador + 3)% 3 == 1)    {
      // O jogador ganha
      this.theResult = 0;
      this.pontuacao[0] = this.pontuacao[0]+1;
    }
    else{
      // O joador perde
      this.theResult = 1;
        this.pontuacao[1] = this.pontuacao[1]+1;
    }
 }
}