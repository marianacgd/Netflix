import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  eps = []

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  recebeEvento(event: any){
    console.log("Recebeu Evento!")
    console.log(event)
  }
}
