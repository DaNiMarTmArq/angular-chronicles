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
    title: 'Reactividad con signals',
    body: 'En Angular, utilizamos signals para crear y administrar el estado...',
  };
}
