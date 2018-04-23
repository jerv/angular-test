import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  data: any = {};

  ngOnInit():void {
    this.messageService.getToken('test', 'test123!').subscribe(data => {
      this.loadData();
    });
  }

  loadData(): void {
    this.messageService.getData().subscribe(data => this.data = data);
  }


}
