import { Component, Input } from '@angular/core';
import { Message } from 'src/app/interfaces/dialogs-interfaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @Input() message!: Message
  @Input() image!: string
}
