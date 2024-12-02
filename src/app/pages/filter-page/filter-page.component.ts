import { Component } from '@angular/core';
import { FilterTemplateComponent } from '../../components/templates/filter-template/filter-template.component';

@Component({
  selector: 'app-filter-page',
  imports: [FilterTemplateComponent],
  templateUrl: './filter-page.component.html',
  styleUrl: './filter-page.component.css',
})
export class FilterPageComponent {}
