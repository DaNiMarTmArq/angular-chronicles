import { Component, input, signal } from '@angular/core';
import { BlogPost } from '../../../BlogPost';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  isExpanded = signal(false);
  post = input<BlogPost>();

  toggleIsExpanded() {
    this.isExpanded.set(!this.isExpanded());
  }
}
