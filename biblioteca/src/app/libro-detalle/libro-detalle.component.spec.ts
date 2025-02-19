import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDetalleComponent } from './libro-detalle.component';

describe('LibroDetalleComponent', () => {
  let component: LibroDetalleComponent;
  let fixture: ComponentFixture<LibroDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
