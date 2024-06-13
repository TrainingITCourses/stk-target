import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CrudRepository } from '@stk/srv';
import { DateComponent, LocationComponent } from '@stk/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LocationComponent, DateComponent, AsyncPipe, JsonPipe],
  template: `
    <stk-ui-location value="Lisboa" />
    <stk-ui-date [value]="date" />
    <pre>{{ activities$ | async | json }}</pre>
  `,
})
export class AppComponent {
  place = 'Madrid';
  date = new Date(2025, 3, 6);
  #crud = inject(CrudRepository);
  activities$ = this.#crud.getAll('activities');
}
