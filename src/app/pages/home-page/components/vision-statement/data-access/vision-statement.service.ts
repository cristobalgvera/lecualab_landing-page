import { computed, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { VisionStatementDto } from './dtos';

@Injectable({ providedIn: 'root' })
export class VisionStatementService {
  // TODO: Load vision statement from the server
  readonly #visionStatementResource = rxResource({
    loader: () =>
      of<VisionStatementDto>({
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        content: `
          To be the most trusted and respected professional services firm
          recognized by our clients for delivering excellence.

          To be the most trusted and respected professional services firm
          recognized by our clients for delivering excellence.
        `,
      }),
  });

  readonly $visionStatement = this.#visionStatementResource.value.asReadonly();
  readonly $hasValue = computed(() => this.#visionStatementResource.hasValue());
}
