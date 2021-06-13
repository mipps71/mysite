import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface AppleResults {
  resultCount: number;
  results: any[];
}

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html'
})
export class MusicComponent {

  public songs: any[] = [];

  public inputText = '';

  constructor(private http: HttpClient) {
    console.log('music initialized');
  }

  public search() {
    console.log('search', this.inputText);

    this.http.get('https://itunes.apple.com/search?term=' + this.inputText).subscribe(res => {
      console.log('res', res);
      const results: AppleResults = res as AppleResults;
      this.songs = results.results;
    });
  }

}
