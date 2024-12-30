import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [
    RouterLink
  ],
})
export class NotFoundComponent {

  @Input()
  title: string = 'No corresponding page found';


}
