import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [
    RouterLink,
    NgIf
  ],
})
export class NotFoundComponent implements OnInit {

  @Input()
  title: string = 'No corresponding page found';
  showGoBackLink!: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.showGoBackLink = this.router.url === "/";
  }

}
