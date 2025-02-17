import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-postform',
  imports: [],
  templateUrl: './postform.component.html',
  styleUrl: './postform.component.css',
})
export class PostformComponent {
  date = new Date();
  imageToggle = signal(true);
  deleteModalToggle = signal(true);
  placeholders = {
    title: 'Reactividad con signals',
    body: 'En Angular, utilizamos signals para crear y administrar el estado...',
    image:
      'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
  };
  toggleImageField() {
    this.imageToggle.set(!this.imageToggle());
  }
  toggleDeleteModal() {
    this.deleteModalToggle.set(!this.deleteModalToggle());
  }
  deleteForm() {}
}
