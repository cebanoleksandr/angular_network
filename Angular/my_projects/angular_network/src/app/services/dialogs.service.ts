import { Injectable } from '@angular/core';
import { Dialog, Message } from '../interfaces/dialogs-interfaces';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  private dialogs: Dialog[] = [
    {id: 1, username: 'Irina Dobrianskaya', image: 'https://render.fineartamerica.com/images/rendered/small/print/images/artworkimages/square/3/very-sexy-girl-r-a-w-m-.jpg',  messages: [{id: 1, message: 'Irina Dobrianskaya'}]},
    {id: 2, username: 'Pavel Lomonosov', image: 'https://stylesatlife.com/wp-content/uploads/2019/09/Edgy-Side-Look-for-Men.jpg', messages: [{id: 1, message: 'Irina Dobrianskaya'}]},
    {id: 3, username: 'Vitaliy Klichko', image: 'https://i0.wp.com/manforhimself.com/wp-content/uploads/2022/01/andrew-garfield-wavy-quiff-mens-hairstyles-man-for-himself-ft.jpg?fit=1200%2C1200&ssl=1?v=1641480718', messages: [{id: 1, message: 'Irina Dobrianskaya'}]},
    {id: 4, username: 'Elina Svitolina', image: 'https://previews.123rf.com/images/ponomarencko/ponomarencko1511/ponomarencko151100191/48904615-square-photo-of-blonde-woman-gift-studio-shot-gray-background-with-stripes.jpg', messages: [{id: 1, message: 'Irina Dobrianskaya'}]},
    {id: 5, username: 'Vera Serdiukova', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddAqff6oughOFZhynzfp5oBdpytO8krepeBVNffdrZ19pa1al4DWlDIm8arnAC5W84V0&usqp=CAU', messages: [{id: 1, message: 'Irina Dobrianskaya'}]},
    {id: 6, username: 'Semen Soloviov', image: 'https://i0.wp.com/manforhimself.com/wp-content/uploads/2022/01/andrew-garfield-wavy-quiff-mens-hairstyles-man-for-himself-ft.jpg?fit=1200%2C1200&ssl=1?v=1641480718', messages: [{id: 1, message: 'Irina Dobrianskaya'}]},
    {id: 7, username: 'Ani Lorak', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddAqff6oughOFZhynzfp5oBdpytO8krepeBVNffdrZ19pa1al4DWlDIm8arnAC5W84V0&usqp=CAU', messages: [{id: 1, message: 'Irina Dobrianskaya'}]},
  ]

  constructor() { }

  getAll() {
    return this.dialogs;
  }

  getById(id: number) {
    return this.dialogs.find(dialog => dialog.id === id);
  }

  addMessage(id: number | null, message: Message) {
    if (id) {
      this.getById(id)?.messages.push(message);
    }
  }
}
