import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title: string = 'Hello, World!';

  public state: any = {
    name: 'Initial',
    counter: -1,
    timestamp: ''
  };

  constructor(private http: Http) { }

  public ngOnInit(): void {
    Observable.interval(1000)
      .flatMap(() => this.http.get('/api/hello'))
      .forEach(response => this.state = response.json());
  }

}
