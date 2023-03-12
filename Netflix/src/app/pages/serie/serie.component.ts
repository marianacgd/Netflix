import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  series = [
    {
      id: 1,
      nome: 'Suits',
      imagem: 'https://occ-0-804-420.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSVh4y_v_Unh2kUbXYF-4Jr4-HL-1XFtONnLGjck5DYPaxMIjwi5OudI7e21vTNo_x6FcuP063ZOKq3-f1JRz5tInMR_pHEr6sY.webp?r=3ad',
    },
    {
      id: 2,
      nome: 'The Office',
      imagem: 'https://occ-0-804-420.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeBGxFKLJ2P5a71v9gP19aMj0FkTn1F_cIZWaKN5VGqdy8ya1P30Jv45fI5eCOXhcIYWy6_nZbHR-vo29BZeMI9lbwnjbjt2sFs.webp?r=87f://starwars-visualguide.com/assets/img/characters/2.jpg',
      
    },
    {
      id: 3,
      nome: 'Braking Bad',
      imagem: 'https://occ-0-804-420.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZi_RqpT84KU9PuLqluo8QNslnXT8Hu2_bME3ez2GFxUqc-CdICtULofUMFIpTV_EO1tghUWNSLzXeqhWzYDdSL2ifiUB0eKrn8.webp?r=01d',
      
    },
    {
      id: 4,
      nome: 'Marlon',
      imagem: 'https://occ-0-804-420.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWLSVpO-IKo093AVgIDNXfPvnto_sMJic1B8KcX0PA8koynOlIWPVT5Xdp2_X4uPvymb2IMR3amdMAjHFPMGVO6Zn3b9PcZ6BecOoGkhzX-LxR3ZNZ4RwWv3P5mxkKzgG2P_.jpg?r=7f9://starwars-visualguide.com/assets/img/characters/5.jpg',
      
    },
    {
      id: 5,
      nome: 'A batalha dos 100',
      imagem: 'https://occ-0-804-420.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe03QaGNYhY38xmDYMI1gzQVyMd07MxmqJozvVvoRkEF8IhKZXO9pmMvILPWeLQL8om8L3JX4PRpQelRZTb7qJuTPdhVgcEqjdTeT4Zk_5sMqKRzwQ6LIGfESfArOMJVotBm.jpg?r=405://starwars-visualguide.com/assets/img/characters/3.jpg',
      
    },
    {
      id: 6,
      nome: 'The Flash',
      imagem: 'https://occ-0-804-420.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ2eiBpv_rekzKj9jQZotd4B03h7CzmZkUtSPJMLEAFqL9yfN0HrM3AsotR28mktweG4g0DJzJiprKzYxs34LF5H35bNHMRHRFQ.webp?r=615://starwars-visualguide.com/assets/img/characters/10.jpg',
      
    },
  ];

}
