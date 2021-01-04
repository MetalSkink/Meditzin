import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConsultoriosComponent } from './lista-consultorios.component';

describe('ListaConsultoriosComponent', () => {
  let component: ListaConsultoriosComponent;
  let fixture: ComponentFixture<ListaConsultoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaConsultoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConsultoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
