import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>DEGER YAKALAMA 3 / WievChild Function</h1>
    <input id="nameID" #name (keyup)="getValue()" />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'catch-value-3';

  @ViewChild('name') // burdaki name yukarda isaretledigimiz diyez(#) isaretinin bulundugu input elementini referans gosteriyor
  myElement!: ElementRef<HTMLInputElement>; //ElementRef class ina HTMLInputElement elementini vererek input elementinin tum yapilarini obje olarak aliyoruz
  //burdaki unlem isareti, ben degiskenimi ilk degeri atamadan kullanmak istiyorum demektir (!->non-null assertion)

  getValue() {
    console.log(this.myElement);
    console.log(this.myElement.nativeElement.value);
  }
}
