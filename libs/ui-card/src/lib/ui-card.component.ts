import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
 
@Component({
  selector: 'lib-ui-card',
  imports: [CommonModule],
  styles: `
    .card {
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 1rem;
      padding: 1rem;
    }
  `,
  template: `
    <article class="card">
      <h3>{{ title() }}</h3>
      <p>{{ description() }}</p>
    </article>
  `,
})
export class UiCardComponent {
  public description = input.required<string>();
  public title = input.required<string>();
}