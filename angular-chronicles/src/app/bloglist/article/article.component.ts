import { Component, input, signal } from '@angular/core';
import { BlogPost } from '../../../BlogPost';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [DatePipe],
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  isExpanded = signal(false);
  post = input<BlogPost>();

  toggleIsExpanded() {
    this.isExpanded.set(!this.isExpanded());
  }
}
