import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:`
    <h1>DEGER YAKALAMA</h1>
    <input id="name" (keyup)="getValue()"/>
  `,
  styleUrl: './app.component.css'
})

// keyup event i onChange event i dir

export class AppComponent {
    getValue(){
    let element: any = document.getElementById('name');
    console.log(element.value);
  }
}
