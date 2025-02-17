import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogPost } from '../../BlogPost';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-postform',
  imports: [FormsModule, NgClass],
  templateUrl: './postform.component.html',
  styleUrl: './postform.component.css',
})
export class PostformComponent {
  placeholders = {
    title: 'Reactividad con signals',
    body: 'En Angular, utilizamos signals para crear y administrar el estado...',
    image:
      'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
  };
  date = new Date();
  title: string = '';
  body: string = '';
  imageURL: string = '';
  imageToggle = signal(true);
  deleteModalToggle = signal(true);

  get submitClasses() {
    const isValid = this.title.length > 0 && this.body.length > 0;
    return {
      'hover:cursor-pointer': isValid,
      'opacity-50': !isValid,
    };
  }

  toggleImageField() {
    this.imageToggle.set(!this.imageToggle());
  }
  toggleDeleteModal() {
    this.deleteModalToggle.set(!this.deleteModalToggle());
  }
  handlePostCreation(): BlogPost {
    return {
      title: this.title,
      body: this.body,
      imageURL: this.imageURL,
      publishedAt: this.date,
    };
  }
  deleteForm() {
    (this.title = ''), (this.body = ''), (this.imageURL = '');
    this.toggleDeleteModal();
  }
}
