import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

// ngModel' i kullanabilmek icin FormsModule import edilir ve kullanilacagi component e verilir(asagida import edildi -> imports:[...])

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  template: `
    <h1>DEGER YAKALAMA 4 / ngModel(hangi elementte attribute lik yapiyorsa kendisine verilen degeri o element icinde gosterir ama o elemente kullanici bi sey girmisse degeri o olur!)</h1>
    <h2>Sadece giris degerli olan elementlerde(textbox,checkbox vb.) ngModele uygulayabiliriz.</h2>
    <input id="name" [(ngModel)] = "name" />  <!-- [ngModel] ile name isimli variable in degeri ngModel e a ataniyor yani PROPERTY BINDING yaptik(ngModel -> angular reserved keyword)  -->
                                              <!-- daha sonrasinda yaptigimiz EVENT BINDING ile -> (ngModel) , simdi artik veriyi name e de gonderebiliyor-->
                                              <!-- yani [(ngModel)] bu sekilde hem veri alacak->[] , hem de veri gonderebilecek->() -->
    <button (click)="getValue()">CLICK</button>
  `,
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
  name: string = "Percorist";

  getValue() {
    console.log(this.name);
  } 

}
