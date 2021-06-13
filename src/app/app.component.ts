import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = "mysite";
  public another: number = 1.7;

  public isVisible: boolean = false;

  public hotels = [
    {
      name: 'Justins Hotel',
      address: '1269 Harrison',
      people: [
        'Justin',
        'Rachel'
      ]
    },
    {
      name: 'Dads Hotel',
      address: '1269 Harrison',
      people: [
        'Dad',
        'Mom'
      ]
    }
  ]

  public array = [
    'cookies',
    'budweiser'
  ]

  constructor() {
    console.log(this.array);
    console.log(this.hotels);

    console.group('Hotel Names');
    this.hotels.forEach(hotel => {
      console.log('###################');
      console.log('Hotel Name - ', hotel.name)
      console.log('###################');
    });
    console.groupEnd();
  }

  public uppercaser(string: string) {
    return string.toUpperCase();
  }

}

