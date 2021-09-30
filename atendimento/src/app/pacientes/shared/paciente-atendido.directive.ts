import { Directive, Input, ElementRef, OnInit  } from '@angular/core';

@Directive({
  selector: '[pacienteAtendido]'
})
export class PacienteAtendidoDirective {
  @Input() pacienteAtendido: boolean;

    constructor(private el:ElementRef) { }

    ngOnInit(){
      if(this.pacienteAtendido){
        this.el.nativeElement.style.backgroundColor = "green"
      }
    }

}
