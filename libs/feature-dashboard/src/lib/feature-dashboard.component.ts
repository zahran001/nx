import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DashboardService } from '@nx-demo/data-access-dashboard';
import { UiCardComponent } from '@nx-demo/ui-card';
 
@Component({
  selector: 'lib-feature-dashboard',
  imports: [CommonModule, UiCardComponent],
  styles: `
    h1 {
      text-align: center;
    }
 
    section {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
  `,
  template: `
    <h1>Dashboard</h1>
    <section>
      @if (cards$ | async; as cards) {
        @for (card of cards; track $index) {
          <lib-ui-card
            [description]="card.description"
            [title]="card.title"
          ></lib-ui-card>
        }
      } @else {
        <p>Loading...</p>
      }
    </section>
  `,
})
export class FeatureDashboardComponent {
  private readonly service = inject(DashboardService);
 
  public cards$ = this.service.getDashboardData();
}