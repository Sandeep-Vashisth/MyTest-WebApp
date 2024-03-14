import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent     implements     OnInit {
   price: string = '';
   date: string = '';
   dataList: any[] = [];
  title = 'UIWebApp';
  ngOnInit(): void {
    this.dataList = this.getAllTransactions();  
  }
  getAllTransactions() {
    return [
      {
        date: "1/1/2024",
        price: 125,
        reward: 50
      }
    ]
    //return listdata;
  }
//Gerate List
   SendInputData(price : any)
  {    
    console.log(this.price);
    let reward = this.calculateRewards(price);   
    this.dataList.push({date: formatDate(new Date(), 'dd/MM/YYYY', 'en'), price: this.price, reward: reward});
    console.log(this.dataList);

  }
 calculateRewards(price: any) {
  if (price >=50 && price < 100) {
      return price-50;
  } else if (price >100){
      return (2*(price-100) + 50);
  }
  return 0;
}
}
