import { Component } from '@angular/core';
import { FilterComponent } from '../../organisms/filter/filter.component';

@Component({
  selector: 'app-filter-template',
  imports: [FilterComponent],
  templateUrl: './filter-template.component.html',
  styleUrl: './filter-template.component.css',
})
export class FilterTemplateComponent {}
