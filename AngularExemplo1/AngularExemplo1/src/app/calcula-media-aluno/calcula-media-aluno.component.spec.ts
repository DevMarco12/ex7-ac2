import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaMediaAlunoComponent } from './calcula-media-aluno.component';

describe('CalculaMediaAlunoComponent', () => {
  let component: CalculaMediaAlunoComponent;
  let fixture: ComponentFixture<CalculaMediaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculaMediaAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculaMediaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
