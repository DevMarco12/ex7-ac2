import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula-media-aluno',
  templateUrl: './calcula-media-aluno.component.html',
  styleUrls: ['./calcula-media-aluno.component.css']
})
export class CalculaMediaAlunoComponent implements OnInit {
  avaliacao1: any;
  avaliacao2: any;
  testeProgresso: any;
  avaliacaoFinal: any;
  mediaFinal: any;
  constructor() { }

  ngOnInit(): void {
  }

  calcularMediaAluno() {
    // Média Final = (AC1 * 0,15) + (AC2 * 0,30) + (AG * 0,10) + (AF * 0,45)
    this.mediaFinal = (this.avaliacao1 * 0.15) + (this.avaliacao2 * 0.3) + (this.testeProgresso * 0.1) + (this.avaliacaoFinal * 0.45)
  }

}
