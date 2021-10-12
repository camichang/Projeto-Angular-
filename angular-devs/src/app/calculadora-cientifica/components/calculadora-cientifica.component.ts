import { Component, OnInit } from '@angular/core';
import { CalculadoraCientificaService } from '../services';


@Component({
  selector: 'app-calculadora-cientifica',
  templateUrl: './calculadora-cientifica.component.html',
  styleUrls: ['./calculadora-cientifica.component.css']
})
export class CalculadoraCientificaComponent implements OnInit {

  private num1!: string;
  private num2!: string;
  private resultado!: string;
  private operacao!: string;

  constructor(private calculadoraCientificaService: CalculadoraCientificaService) { }

  ngOnInit() {
    this.limpar()
  }

  /**
   *  Inicializando todos os operadores para valores padrao.
   */

  limpar(): void {
    this.num1 = '0';
    this.num2 = null;
    this.resultado = null;
    this.operacao = null;
  }


  /**
   * Retorna o valor concatenado. Trata o separador decimal.
   * @param numAtual string
   * @param numConcat string
   * @returns 
   */

  concatenaNumero(numAtual: string, numConcat: string): string {
    //caso contenha apenas 0 ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }
    //primeiro digito é '.', juntar com 0 antes do ponto
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }
    //caso '.' digitado e já contenha um '.', apenas retorna
    if (numConcat === '.' && numAtual.indexOf('.') > 1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  /**
   * Metodo adiciona o numero selecionado
   * para o calculo posteriormente
   * @param numero string
   */

  adicionaNumero(numero: string): void {
    if (this.operacao === null) {
      this.num1 = this.concatenaNumero(this.num1, numero)
    } else {
      this.num2 = this.concatenaNumero(this.num2, numero)
    }
  }

  definirOperacao(operacao: string): void {
    //apenas define a opreacao caso nao exista uma
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }
    if (this.num2 !== null) {
      this.resultado = this.calculadoraCientificaService.calcular(
        parseFloat(this.num1),
        parseFloat(this.num2),
        this.operacao
      ).toString();
      this.operacao = operacao;
      this.num1 = this.resultado.toString();
      this.num2 = null;
      this.resultado = null;
    }
  }
  calcular():void{
    if(this.num2 === null){
      let op = this.operacao
      if(op === 'x2' || op === 'x3' || op === 'raiz' || op === 'pi' || op == '%'){
        this.resultado = this.calculadoraCientificaService.calcular(
          parseFloat(this.num1),
          parseFloat(this.num2),
          this.operacao
        ).toString();
      }
      else{
        return;
      }
    }
    this.resultado = this.calculadoraCientificaService.calcular(
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.operacao
    ).toString();

    this.num1 = this.resultado;
    this.operacao = null;
    this.num2 = null;
  }

  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.num2 !== null) {
      return this.num2.toString();
    }
    return this.num1.toString();
  }

}
