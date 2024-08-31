import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesFederativasComponent } from './unidades-federativas.component';

describe('UnidadesFederativasComponent', () => {
  let component: UnidadesFederativasComponent;
  let fixture: ComponentFixture<UnidadesFederativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadesFederativasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadesFederativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
