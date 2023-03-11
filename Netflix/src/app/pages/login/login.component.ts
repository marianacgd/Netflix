import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  emailLogin: any = '';
  passwordLogin: any = '';
  email: any = '';
  password: any = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.formLogin = this.fb.group({
      emailLogin: ['', [Validators.required, Validators.email]],
      passwordLogin: ['', Validators.required]
    })
  }

  onLogar() {
    
    const storage = window.localStorage;
    const emailStorage = storage.getItem('email');
    const passwordStorage = storage.getItem('password');

    if(this.emailLogin === emailStorage && this.passwordLogin === passwordStorage){
      localStorage.setItem('logado', 'true');
      this.router.navigate(['/serie'])
    } else {
      alert('Erro!');
    }
  }
}
