import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../calculate.service';
@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {
  constructor(private calculateservice:CalculateService) { }

  Total: number;
  years:number;

  calaulateinterest():void{
    this.Total = this.calculateservice.calaulateinterest(this.years);
  }

  ngOnInit() {
  }

}




