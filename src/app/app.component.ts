import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [,
      { title: 'Inicio', url: '/folder', icon: 'home' },
      { title: 'Home', url: '/home', icon: 'home' },
      { title: 'Dados', url: '/dados', icon: 'document' },
      { title: 'Histórico', url: '/historico', icon: 'analytics-outline' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
