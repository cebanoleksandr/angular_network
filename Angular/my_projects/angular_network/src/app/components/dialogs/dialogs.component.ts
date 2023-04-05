import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Dialog, Message } from 'src/app/interfaces/dialogs-interfaces';
import { DialogsService } from 'src/app/services/dialogs.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  messages: Message[] = [];
  createdMessage: string = '';
  image: string = '';
  id: number | null = null;
  dialogs!: Dialog[];
  isMessanger = false;

  constructor(
    private route: ActivatedRoute,
    private dialogsService: DialogsService
  ) {}

  ngOnInit(): void {
    this.dialogs = this.dialogsService.getAll();

    this.route.params.subscribe((params: Params) => {
      const dialog = this.dialogsService.getById(+params['id'])
      if (dialog) {
        this.isMessanger = true;
        this.messages  = dialog.messages;
        this.image = dialog.image;
        this.id = +dialog.id;
      } else {
        this.messages = [];
        this.isMessanger = false;
        this.id = null;
      }
    })
  }

  sendMessage() {
    if (!this.createdMessage.trim().length) {
      return;
    }

    const newMessage = {
      id: 12,
      message: this.createdMessage
    }

    this.dialogsService.addMessage(this.id, newMessage);
    this.createdMessage = '';
  }
}
