import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSelecionado]'
})
export class SelecionadoDirective implements OnInit{

  @Input() appSelecionado:boolean;


  constructor(private el:ElementRef) { }

  ngOnInit(){

    if(this.appSelecionado){
      this.el.nativeElement.style.filter = "drop-shadow(0px 0px 20px  rgb(54, 146, 32))"
    }
  }
}
