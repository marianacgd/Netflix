import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  myGroup!: FormGroup;

  email: any = '';
  nome: any = '';
  password: any = '';


  constructor(private fb: FormBuilder ,private router: Router) {}

  ngOnInit() {
    this.myGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      password: ['', Validators.required]
  });

  }

  onCadastrar(){
    const storage = window.localStorage;
    storage.setItem("email", this.email);
    storage.setItem("nome", this.nome);
    storage.setItem("password", this.password);
  }
}
