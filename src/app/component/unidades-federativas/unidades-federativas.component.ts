// src/app/unidades-federativas/unidades-federativas.component.ts
import { Component, OnInit } from '@angular/core';
import { UnidadesFederativasService } from '../../service/unidades-federativas.service';

@Component({
  selector: 'app-unidades-federativas',
  templateUrl: './unidades-federativas.component.html',
  styleUrls: ['./unidades-federativas.component.scss']
})
export class UnidadesFederativasComponent implements OnInit {

  unidadesFederativas: any[] = [];

  constructor(private ufService: UnidadesFederativasService) {}

  ngOnInit(): void {
    console.log('UnidadesFederativasComponent - ngOnInit')
    this.ufService.getUnidadesFederativas().subscribe(data => {
      this.unidadesFederativas = data;
    });
  }
}
