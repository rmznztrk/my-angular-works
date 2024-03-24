import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//decorator, type script fonksiyonu ile cagrilir
//@ -> decorator
//Component -> type script fonksiyonu
//bu type script metotlari bagli oldugu class larin ne oldugunu temsil eder
//burdaki Component isimli ts fonksiyonu asagidaki AppComponent class ina baglidir
//Component fonksiyonu, AppComponent class inin bir ts componenti oldugunu soyluyor
@Component({
  selector: 'app-root', //html element ciktisi verilmis(bir html sayfasindan bu isimli tag le cagiririz (index.html'den cagirdik)
  standalone: true,
  imports: [RouterOutlet],   
  // templateUrl: './app.component.html', //componente ait html dosyasi path i 
  // template: '<h1>Ramazan OZTURK</h1>', //componente ait html taglari
  template: `  
    <p>Merhaba burasi app.component.ts</p>
    <h1>Ramazan OZTURK</h1> 
    <h2>Ramazan OZTURK</h2>
    <p>Merhaba burasi app.component.ts</p>
  `, //componente ait html taglari(coklu satir html etiketleri kullandıgimiz icin ters tirnak kullandik)(ters tirnak=> ctrl+alt+virgule(,) iki click)
  styleUrl: './app.component.scss' //componente ait css dosyasi path i
})


//1- Bu scopta, variable olusturabiliriz

//2- AppComponent class' inda variable olusturabiliriz
//type scriptte ozel degiskenler olusturabiliriz
export class AppComponent {
  title = 'my-app rmzn';

  name: string = "Ramazan ÖzTüRk";
  //string
  //number
  //boolean
  //date
  //any(yukaridaki tipleri ve mevcut olan diger tipleri tanimlamak icin kullanabiliriz)(tum tipleri kapsar)
  //yukaridaki tum primitive tipleri kullanarak degisken tanimlayabiliriz 
  //ve obje

  //atanacak degere gore name2 variable 'ina string number veya undefined degeri atanir
  //undefined: js ye ozgudur, bir deger bulunamadiysa yani yoksa(varolmamissa) o deger undefined olur
  //yani bir variable tanimlayip baslangic degeri atamadiysak o degiskenin degeri undefined olur
  name2: string | number | undefined = 10;

  name3: string | number | undefined | null | boolean | Date | object = 10;

  name4 = "ozturk"; //tipi, atanan degere gore otomatik olarak verilir(ama biz best practice olarak tipi veririz genelde)


  //asagidaki age variable degerine sadece tipini verip bir deger atamadigimizdan dolayi kabul etmez ancak
  //(age' in number tipli undefined bir variable olmasini istiyorsak) proje ana klasoru icinde:
  //tsconfig.json dosyasina gelip "strict" in altina -> "strictNullChecks": false, ifadesini yaziyoruz 
  //boylece degiskenlere undefined degerini rahat atamaya izin veriliyor oluyor
  age: number;
  


  //ya da undefined oldugunu belirtecegiz
  // age: undefined;

  //veya asagidaki gibi ya number dir ya da undefined oldugu belirtilir
  // age: number | undefined;


  constructor(){
    console.log(this.age);
    console.log(this.age);
    console.log(this.age);
  }

}


//comment line -> control + k + c

