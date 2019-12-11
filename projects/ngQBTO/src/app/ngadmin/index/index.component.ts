import { Component, OnInit } from '@angular/core';
import { NzPlacementType } from 'ng-zorro-antd';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  // isCollapsed = false;

  listOfPosition: NzPlacementType[] = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];


  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
