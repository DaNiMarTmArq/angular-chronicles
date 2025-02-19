import { DatePipe, NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BlogPost } from '../../BlogPost';

@Component({
  selector: 'app-postform',
  imports: [FormsModule, NgClass, DatePipe],
  templateUrl: './postform.component.html',
})
export class PostformComponent {
  @Output('newPost') newPostEmitter = new EventEmitter<BlogPost>();
  placeholders = {
    title: 'Reactividad con signals',
    body: 'En Angular, utilizamos signals para crear y administrar el estado...',
    image: 'https://example.com/image.jpg',
  };
  date = new Date();
  imageToggle = true;
  deleteModalToggle = true;

  toggleImageField() {
    this.imageToggle = !this.imageToggle;
  }
  toggleDeleteModal() {
    this.deleteModalToggle = !this.deleteModalToggle;
  }
  handlePostCreation(form: NgForm) {
    const { title, body, image } = form.value;
    const newPost: BlogPost = {
      title,
      body,
      imageURL: image,
      publishedAt: this.date,
    };
    this.newPostEmitter.emit(newPost);
    form.reset({
      title: '',
      body: '',
      image: '',
    });
    if (!this.imageToggle) this.toggleImageField();
  }
  resetForm(form: NgForm) {
    form.reset({
      title: '',
      body: '',
      image: '',
    });
    this.toggleDeleteModal();
    if (!this.imageToggle) this.toggleImageField();
  }
}
