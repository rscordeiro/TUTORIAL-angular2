import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.css']
})
export class ThirdTaskComponent implements OnInit {
  displayDetails = false;
  buttonName = 'Display Details';
  countLogs = [];

  onButtonClick () {
    this.displayDetails = !this.displayDetails;
    this.buttonName = this.displayDetails ? "Hide Details" : "Display Details";
    this.countLogs.push(new Date);
  }

  constructor() { }
  ngOnInit(): void {}
}
