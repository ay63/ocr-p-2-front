import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {LoaderHttpInterceptorService} from './core/services/loader-http-interceptor/loader-http-interceptor.service';
import {DashboardCountriesComponent} from './pages/dashboard-countries/dashboard-countries.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoaderComponent} from './components/loader/loader.component';
import {ToastrModule} from 'ngx-toastr';
import {HttpErrorComponent} from "./components/http-error/http-error.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpErrorComponent,
    HeaderComponent,
    DashboardCountriesComponent,
    NgxChartsModule,
    BrowserAnimationsModule,
    LoaderComponent,
    ToastrModule.forRoot({
      timeOut: 50000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
