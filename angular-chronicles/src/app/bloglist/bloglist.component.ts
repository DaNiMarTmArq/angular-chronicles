import { Component, input } from '@angular/core';
import { BlogPost } from '../../BlogPost';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-bloglist',
  imports: [ArticleComponent],
  templateUrl: './bloglist.component.html',
})
export class BloglistComponent {
  postList = input<BlogPost[]>([]);
}
