import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pratap Patel';
  call(){
    window.open(`https://wa.me/9425169695?text=Hello%20Pratap Patel Ji`, '_blank');
  }  
}
