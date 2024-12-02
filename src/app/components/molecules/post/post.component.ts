import { Component, Input } from '@angular/core';
import { PostInterface } from '../../../models/post.model';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  @Input() post!: PostInterface; // Recibe el post como input
}
