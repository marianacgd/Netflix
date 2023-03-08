import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /* serie: ISerie = {
    nome: 'Friends',
    duracao: '240min',
  }; */

  inputEmail: any = '';
  inputNome: any = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
