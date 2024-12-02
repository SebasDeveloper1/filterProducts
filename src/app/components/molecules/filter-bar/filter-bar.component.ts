import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DropdownComponent } from '../../atoms/dropdown/dropdown.component';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-filter-bar',
  imports: [DropdownComponent, ButtonComponent],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css',
})
export class FilterBarComponent {
  @Input() categories: string[] = [];
  @Input() categoryCtrl: FormControl = new FormControl();
  @Output() filter = new EventEmitter<string>();

  applyFilter() {
    this.filter.emit(this.categoryCtrl.value);
  }
}
