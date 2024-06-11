import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocationComponent } from '@stk/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LocationComponent],
  template: ` <stk-ui-location value="Lisboa" /> `,
})
export class AppComponent {
  place = 'Madrid';
}
