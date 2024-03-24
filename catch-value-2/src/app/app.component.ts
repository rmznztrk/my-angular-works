import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet],
  template: `
    <h1>VALUE CATCH!</h1>
    <input id='name' (keyup)="getValue($event)" />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
  getValue(event: any){
    console.log(event.target.value);
  }  
  
}
