import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogPost } from '../BlogPost';
import { PostformComponent } from './postform/postform.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    BloglistComponent,
    PostformComponent,
    CardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'act5-angular-chronicles';
  blogPosts: BlogPost[] = [
    {
      title: 'Cómo funciona el ciclo de vida de los componentes en Angular',
      body: 'En Angular, cada componente tiene un ciclo de vida definido por una serie de métodos que se ejecutan en distintos momentos. Desde la inicialización con `ngOnInit`, pasando por la detección de cambios con `ngOnChanges`, hasta la destrucción con `ngOnDestroy`. Comprender estos métodos es clave para manejar correctamente los recursos y optimizar el rendimiento de nuestras aplicaciones.',
      publishedAt: new Date('2025-02-15'),
      imageURL:
        'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
    },
    {
      title:
        'Two-Way Binding en Angular: Sincronización entre la vista y el modelo',
      body: 'El Two-Way Binding en Angular permite sincronizar automáticamente los datos entre el modelo y la vista, facilitando la gestión del estado en formularios y componentes interactivos. Esto se logra con la directiva `[(ngModel)]`, que mantiene los cambios reflejados en ambas direcciones. En este artículo, exploraremos cómo funciona, cuándo utilizarlo y cuáles son sus alternativas en formularios reactivos.',
      publishedAt: new Date('2025-02-14'),
    },
  ];
  get totalWords(): number {
    const countWords = (text: string) => text.trim().split(/\s+/).length;
    return this.blogPosts.reduce(
      (acc, curr) => acc + (countWords(curr.body) || 0),
      0
    );
  }
  handleNewPost(newPost: BlogPost) {
    this.blogPosts = [newPost, ...this.blogPosts];
  }
}
