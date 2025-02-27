import { ChangeDetectionStrategy, Component, Directive, inject } from '@angular/core';
import {
  NgbAccordion,
  NgbAccordionContent,
  NgbAccordionGroup,
  NgbAccordionHeader,
  slideAnimation,
} from '@ngbase/adk/accordion';

@Component({
  selector: 'awe-accordion-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [{ directive: NgbAccordionGroup, inputs: ['multiple'] }],
  template: `<ng-content />`,
  host: {
    class: 'block rounded-lg border bg-foreground',
  },
})
export class AccordionGroup {}

@Component({
  selector: 'awe-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    { directive: NgbAccordion, inputs: ['expanded', 'disabled'], outputs: ['expandedChange'] },
  ],
  imports: [NgbAccordionContent],
  template: `
    <ng-content select="[aweAccordionHeader]" />
    @if (accordion.expanded()) {
      <div ngbAccordionContent [@slide] class="overflow-hidden">
        <div class="px-3 pb-4 text-muted">
          <ng-content />
        </div>
      </div>
    }
  `,
  host: {
    class: 'block will-change-auto [&:not(:last-child)]:border-b',
  },
  animations: [slideAnimation],
})
export class Accordion {
  readonly accordion = inject(NgbAccordion);
}

@Directive({
  selector: '[aweAccordionHeader]',
  hostDirectives: [NgbAccordionHeader],
  host: {
    class:
      'flex items-center w-full py-3 px-3 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
  },
})
export class AccordionHeader {}
