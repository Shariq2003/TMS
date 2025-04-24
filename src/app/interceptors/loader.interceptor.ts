import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../tasks/services/loader/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(private loaderService : LoaderService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('Loader started for request:', req.url);
        this.loaderService.show();
        return next.handle(req).pipe(
          finalize(() => {
            // console.log('Loader finished for request:', req.url);
            this.loaderService.hide();
          })
        );
    }
}