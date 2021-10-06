import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ConversorService } from '../services';
import { Conversao } from '../models';

@Component({
  selector: 'modal-conversao',
  templateUrl: './modal-conversao.component.html',
  styleUrls: ['./modal-conversao.component.css']
})
export class ModalConversaoComponent implements OnInit {

  @Input() id:string;
  @Input() conversao: Conversao = new Conversao ();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorService: ConversorService) { }

  ngOnInit(): void {
  }

  novaConsulta(){
    this.onConfirm.emit();
  }

  get valorConvertido(): string {
    return (this.conversao.valor * this.conversorService.converter(this.conversao)).toFixed(2);
  }


}


