import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uiTask';

  cardData:any;

  constructor(private apiService:ApiService){}
  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi(){
    this.apiService.getData().subscribe((data:any)=>{
      this.cardData = data
      console.log(data)
    })
  }




}
