import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.scss'
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = "desc";
  itemsShowCount = 12;

  onSortUpdated(newSort: string):void {
    this.sort = newSort;
  };

  onItemsUpdate(count: number):void {
    this.itemsShowCount = count;    
  };

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  };

};
