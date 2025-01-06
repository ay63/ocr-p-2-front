import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-http-error',
  standalone: true,
  templateUrl: './http-error.component.html',
  styleUrl: './http-error.component.scss',
  imports: [
    RouterLink,
    NgIf
  ],
})
export class HttpErrorComponent implements OnInit {

  @Input()
  message: string = 'No corresponding page found';

  @Input()
  statusCode!: number;

  showGoBackLink!: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.showGoBackLink = this.router.url === "/";
  }

}
