import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lecture_Angular_Server';

  pageNumber = 1;
  pdfSrc = "../assets/" + this.pageNumber + ".pdf";

  constructor(private http: HttpClient) { }

  //one page up
  plus() {

    //check if the new page exisits
    this.http.get('assets/' + (this.pageNumber + 1) + '.pdf', { responseType: 'text' })
      .subscribe(data => {
        this.plusChecked(data) //subscribe
      });

  }

  //if it exisits, this gets called
  plusChecked(data: string): void {

    this.pageNumber++;
    this.pdfSrc = "../assets/" + this.pageNumber + ".pdf";
  }

  //one page down
  minus() {

    //check if the new page exisits
    this.http.get('assets/' + (this.pageNumber - 1) + '.pdf', { responseType: 'text' })
      .subscribe(data => {
        this.minusChecked(data) //subscribe
      });

  }

  //if it exisits, this gets called
  minusChecked(data: string): void {

    this.pageNumber--;
    this.pdfSrc = "../assets/" + this.pageNumber + ".pdf";
  }


}
