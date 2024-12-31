import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {LoaderService} from "../../core/services/loader/loader.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {

  loading$!: Observable<boolean>;

  constructor(
    private loaderService: LoaderService
  ) {
  }

  ngOnInit(): void {
    this.loading$ = this.loaderService.loading$;
  }

}
