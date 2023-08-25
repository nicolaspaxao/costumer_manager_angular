import { Component } from '@angular/core';
import { costumerMockList } from './mock/customer-list';

@Component({
  selector: 'app-costumers-page',
  templateUrl: './costumers-page.component.html',
  styleUrls: ['./costumers-page.component.scss']
})
export class CostumersPageComponent {

  public costumerList = costumerMockList;


}
