import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listItems: ListItem[];
}
export class ListItem {
  public imagePath: 'includes/alex1.jpg';
  // ....
}