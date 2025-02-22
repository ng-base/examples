import { Component } from '@angular/core';
import { Accordion, AccordionGroup, AccordionHeader } from '@/ui/accordion';
import { Slider } from '@/ui/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Accordion, AccordionGroup, AccordionHeader, Slider, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngbase-setup';
}
