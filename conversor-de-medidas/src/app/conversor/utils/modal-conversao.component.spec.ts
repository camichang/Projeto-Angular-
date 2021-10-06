import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConversaoComponent } from './modal-conversao.component';

describe('ModalConversaoComponent', () => {
  let component: ModalConversaoComponent;
  let fixture: ComponentFixture<ModalConversaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConversaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConversaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
