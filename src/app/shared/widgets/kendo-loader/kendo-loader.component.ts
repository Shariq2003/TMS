import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../../tasks/services/loader/loader.service';
import {
  LoaderType,
  LoaderThemeColor,
  LoaderSize,
} from '@progress/kendo-angular-indicators';

@Component({
  selector: 'app-kendo-loader',
  templateUrl: './kendo-loader.component.html',
  styleUrls: ['./kendo-loader.component.scss'],
})
export class KendoLoaderComponent implements OnInit {
  isLoading!: Observable<boolean>;

  @Input() type: LoaderType = 'converging-spinner';
  @Input() themeColor: LoaderThemeColor = 'info';
  @Input() size: LoaderSize = 'large';

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.isLoading = this.loaderService.loading;
  }
}
