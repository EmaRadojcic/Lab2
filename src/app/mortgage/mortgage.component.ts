import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  constructor(private calculateservice:CalculateService) { }

  Total: number;
  years: number;

  calaulateinterest(): void {
    this.Total = this.calculateservice.calaulateinterest(this.years);
  }

  ngOnInit() {
  }

}
