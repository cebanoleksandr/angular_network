import { Injectable } from '@angular/core';
import { Post } from '../interfaces/common-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [
    {id: 1, username: 'Pavel Shlapak', message: 'Happy birthday!!!', image: 'https://stylesatlife.com/wp-content/uploads/2019/09/Edgy-Side-Look-for-Men.jpg', likesCount: 12},
    {id: 2, username: 'Irina Gonchar', message: 'What are you doing?', image: 'https://render.fineartamerica.com/images/rendered/small/print/images/artworkimages/square/3/very-sexy-girl-r-a-w-m-.jpg', likesCount: 54},
    {id: 3, username: 'Irina Dobrianskaia', message: 'I want to see you. Where are you free?', image: 'https://previews.123rf.com/images/ponomarencko/ponomarencko1511/ponomarencko151100191/48904615-square-photo-of-blonde-woman-gift-studio-shot-gray-background-with-stripes.jpg', likesCount: 0},
    {id: 4, username: 'Sergey Zhelezniak', message: 'Would you like to go jogging tomorrow morning?', image: 'https://i0.wp.com/manforhimself.com/wp-content/uploads/2022/01/andrew-garfield-wavy-quiff-mens-hairstyles-man-for-himself-ft.jpg?fit=1200%2C1200&ssl=1?v=1641480718', likesCount: 87},
    {id: 5, username: 'Yulia Yakubenko', message: 'I dont have where to live. Would you like to live together?', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddAqff6oughOFZhynzfp5oBdpytO8krepeBVNffdrZ19pa1al4DWlDIm8arnAC5W84V0&usqp=CAU', likesCount: 4}
  ]

  constructor() { }

  getAll() {
    return this.posts;
  }

  addPost(post: Post) {
    this.posts.unshift(post);
  }
}
