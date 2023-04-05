import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/common-interfaces';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {

  posts!: Post[];
  postText = '';

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getAll();
  }

  addPost() {
    if (!this.postText.trim()) return;

    const newPost: Post = {
      id: +new Date(),
      username: 'Aleksandr Cheban',
      message: this.postText,
      image: 'https://www.pngitem.com/pimgs/m/120-1203486_fitness-sport-man-png-transparent-png.png',
      likesCount: 0
    }

    this.postsService.addPost(newPost);
    this.postText = '';
  }
}
