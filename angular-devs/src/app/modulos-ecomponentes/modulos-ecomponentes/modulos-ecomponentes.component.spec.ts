import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosEcomponentesComponent } from './modulos-ecomponentes.component';

describe('ModulosEcomponentesComponent', () => {
  let component: ModulosEcomponentesComponent;
  let fixture: ComponentFixture<ModulosEcomponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosEcomponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosEcomponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
