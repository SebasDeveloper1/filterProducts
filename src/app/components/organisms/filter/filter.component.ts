import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilterBarComponent } from '../../molecules/filter-bar/filter-bar.component';
import { DataService } from '../../../services/data.service';
import { PostComponent } from '../../molecules/post/post.component';
import { PostInterface } from '../../../models/post.model';

@Component({
  selector: 'app-filter',
  imports: [CommonModule, FilterBarComponent, PostComponent],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  categories: string[] = ['Todos']; // 'Todos' se agrega como una categoría
  posts: PostInterface[] = [];
  filteredPosts: PostInterface[] = [];
  selectedCategory: string = 'Todos'; // Por defecto se selecciona 'Todos' para mostar todos los post
  loading: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loading = true;

    // Obtener los usuarios para el filtro
    this.dataService.getUsers().subscribe((users) => {
      this.categories = ['Todos', ...users.map((user) => user.name)]; // Agrega 'Todos' como la primera opción
      this.loading = false;
    });

    // Obtener los posts
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.filteredPosts = posts;
      this.loading = false;
    });
  }

  // Función para aplicar el filtro y mostrar los posts del usuario seleccionado
  applyFilter(userName: string) {
    if (userName === 'Todos') {
      // Si seleccionamos 'Todos', mostramos todos los posts
      this.filteredPosts = this.posts;
    } else {
      // Si seleccionamos un usuario, filtramos los posts
      this.filteredPosts = this.posts.filter(
        (post) => post.userId === this.categories.indexOf(userName)
      );
    }
  }
}
