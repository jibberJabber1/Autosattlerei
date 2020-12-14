import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { AppService } from '../../app-backend/src/app/app.service';
import { PictureGalleryComponent } from './picture-gallery/picture-gallery.component';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ContactFormComponent,
    MapComponent,
    PictureGalleryComponent,
    DatenschutzComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    Angular2ImageGalleryModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contact-form', component: ContactFormComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'picture-gallery', component: PictureGalleryComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'impressum-und-datenschutzerklaerung', component: DatenschutzComponent },
    ])
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
