import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  isLoading!: Observable<boolean>;
  constructor(private loaderService: LoaderService) {}
  ngOnInit(): void {
    this.isLoading = this.loaderService.loading$;
  }
}
