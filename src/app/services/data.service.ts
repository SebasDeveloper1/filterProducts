import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostInterface } from '../models/post.model';
import { UserInterface } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.postsUrl);
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.usersUrl);
  }
}
