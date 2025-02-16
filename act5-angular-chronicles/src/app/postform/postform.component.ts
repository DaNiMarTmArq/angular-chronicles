import { Component } from '@angular/core';

@Component({
  selector: 'app-postform',
  imports: [],
  templateUrl: './postform.component.html',
  styleUrl: './postform.component.css',
})
export class PostformComponent {
  date = new Date();
  placeholders = {
    title: 'Signals, la nueva forma de gestionar datos reactivos',
    body: 'En Angular, utilizmos signals para crear y administrar el estado...',
  };
}
