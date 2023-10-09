import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoedaService } from '../services';
import { ConversorComponent } from './conversor.component';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversorComponent],
      providers: [MoedaService]
    });
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
