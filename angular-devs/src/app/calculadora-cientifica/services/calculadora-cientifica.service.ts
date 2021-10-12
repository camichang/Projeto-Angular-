/**
Servico responsavel por executar as operacoes da calculadora
*
*@autor Camila Chang <camila.chang@gmail.com>
*@since 1.0
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraCientificaService {

  /*
  Definindo as constantes utilizadas para identificar as operacoes de calculo
  */

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  static readonly ELEVADOQUADRADO: string = 'x2';
  static readonly ELEVADOCUBO: string = 'x3';
  static readonly RAIZQUADRADA: string = 'raiz';
  static readonly PI: string = 'pi';
  static readonly PORCENTAGEM: string = '%';


  constructor() { }

  /**
   * Metodo que calcula uma operacao matematica dado
   * dois numeros e uma opreacao.
   * Suporta as operacoes de soma, subtracao, divisao e multiplicacao, elevado ao quadrado
   * elevado ao cubo, raiz quadrada e pi.
   * @param num1 number
   * @param num2 number
   * @param operacao string operacao a ser executada
   * @returns 
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraCientificaService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraCientificaService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraCientificaService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraCientificaService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraCientificaService.ELEVADOQUADRADO:
        resultado = num1 * num1;
        break;
      case CalculadoraCientificaService.ELEVADOCUBO:
        resultado = Math.pow(num1, 3);
        break;
      case CalculadoraCientificaService.RAIZQUADRADA:
        resultado = Math.sqrt(num1);
        break;
      case CalculadoraCientificaService.PI:
        resultado = num1 * 3.14;
        break;
      case CalculadoraCientificaService.PORCENTAGEM:
        resultado = num1 / 100;
        break;
      default:
        resultado = 0;
    }
    return resultado
  }


}
