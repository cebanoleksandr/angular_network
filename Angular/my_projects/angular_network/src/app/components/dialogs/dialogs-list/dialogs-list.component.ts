import { Component, Input } from '@angular/core';
import { Dialog } from 'src/app/interfaces/dialogs-interfaces';

@Component({
  selector: 'app-dialogs-list',
  templateUrl: './dialogs-list.component.html',
  styleUrls: ['./dialogs-list.component.scss']
})
export class DialogsListComponent {
  
  @Input() dialogs!: Dialog[];
}
