/**
 * author: Camila Chang
 * author: John Gerber
 * author: Roberta Moura
 * author: Yasmine Pallin
 * since: 1.0
 */

 import { Injectable } from '@angular/core';

 @Injectable()
 export class TelasService {
   
   private _showInicio: boolean;
   private _showTabuleiro: boolean;
 
   constructor() { }
 
   /**
    * Inicializa o jogo e define exibição da tela inicial
    * 
    * @return void;
    */
 
   inicializar(): void {
     this._showInicio = true;
     this._showTabuleiro = false;
 
   }
   /**
    * Retorna se a tela de início deve ser exibida.
    * 
    * @return boolean
    */
    get showInicio(): boolean {
     return this._showInicio;
   }
 
   /**
    * Retorna se o jogo deve ser exibido.
    * 
    * @return boolean
    */
   get showTabuleiro(): boolean {
     return this._showTabuleiro;
   }
 
    /**
    * Exibe o jogo.
    *
    * @return void
    */
     iniciarJogo(): void {
       this._showInicio = false;
       this._showTabuleiro = true;
     }
 }