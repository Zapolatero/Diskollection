import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumListComponent } from './feature/albums/album-list/album-list.component';
import { AlbumListModule } from './feature/albums/album-list/album-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlbumListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
