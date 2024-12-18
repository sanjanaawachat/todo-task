import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodos } from '../models/todo';

@Component({
  selector: 'app-tododashboard',
  templateUrl: './tododashboard.component.html',
  styleUrls: ['./tododashboard.component.scss']
})
export class TododashboardComponent implements OnInit {
todoArray:Array<Itodos>=[]
@ViewChild("todoItem")todoItem!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  generateuuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
  }

  ontodoAdd(){
    let newtodo:Itodos={
      todoItem: this.todoItem.nativeElement.value,
      todoId: this.generateuuid(),
    }
  this.todoArray.push(newtodo);
  this.todoItem.nativeElement.value='';

console.log("Todo item added successfully:", newtodo);
}}
