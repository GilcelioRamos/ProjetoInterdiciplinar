import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-home', // Identificador único para o componente
  templateUrl: './home.page.html', 
  styleUrls: ['./home.page.scss'], 
})
export class HomePage {

  constructor(private apiService: AuthService) { }

  ngOnInit() {
  }

}
