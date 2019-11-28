import { BrowserModule } from '@angular/platform-browser';
import {ClassProvider, NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import {AuthInterceptor} from './AuthInterceptor';
import { AuthService } from './shared/services/auth.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { provideRoutes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProviderService } from './shared/services/provider.service';
import { ProfileInfoComponent } from './shared/profile-info/profile-info.component';
import { MatButtonModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileSlideComponent } from './shared/profile-slide/profile-slide.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileInfoComponent,
    ProfileSlideComponent,
    NotFoundPageComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule
  ],
  entryComponents:[
    ProfileSlideComponent
  ],
  providers: [
    AuthModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
