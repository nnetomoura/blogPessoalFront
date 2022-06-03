import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if(environment.token == ""){
      //alert("Sessão encerrada! Faça login novamente.")
      this.router.navigate(["/entrar"])
    }
  }

}
