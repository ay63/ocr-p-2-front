import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from "./pages/header/header.component";
import { LoaderHttpInterceptorService } from './core/services/loader-http-interceptor/loader-http-interceptor.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HeaderComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
