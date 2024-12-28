import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from "./pages/header/header.component";
import { LoaderHttpInterceptorService } from './core/services/loader-http-interceptor/loader-http-interceptor.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './pages/loader/loader.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    DashboardComponent,
    NgxChartsModule,
    BrowserAnimationsModule,
    LoaderComponent,
    ToastrModule.forRoot()
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
