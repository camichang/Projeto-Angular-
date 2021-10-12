import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit{

//o input deve ser igual ao do seletor
  @Input() tarefaConcluida: boolean;

  constructor(private el:ElementRef) { }

  ngOnInit(){
    if(this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }
}
//nativeElement ele é vai representar o 