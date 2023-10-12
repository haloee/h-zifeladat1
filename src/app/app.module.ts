import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import "@ui5/webcomponents-base/dist/features/F6Navigation.js";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeComponent } from './poke/poke.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SearchComponent } from './search/search.component';
import {ReactiveFormsModule } from '@angular/forms';
import { FileUploaderComponent, IllustratedMessageComponent, InputComponent, LinkComponent, ListComponent, MediaGalleryComponent, MenuComponent, TitleComponent, Ui5MainModule, Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

import { ButtonComponent } from "@ui5/webcomponents-ngx/main/button";
import { ShellBarComponent } from "@ui5/webcomponents-ngx/fiori/shell-bar";
import { Ui5WebcomponentsIconsModule } from "@ui5/webcomponents-ngx/icons";
import { AvatarComponent } from "@ui5/webcomponents-ngx/main/avatar";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import { FavouriteComponent } from './favourite/favourite.component';
import "@ui5/webcomponents/dist/features/InputSuggestions.js";
import "@ui5/webcomponents-fiori/dist/illustrations/AllIllustrations.js";
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    PokeComponent,
    PokemonListComponent,
    SearchComponent,
    FavouriteComponent,
    LoadingIndicatorComponent,
  ],
  imports: [
    Ui5WebcomponentsIconsModule.forRoot([
      "sap-icons",
      "tnt-icons",
      "business-suite-icons"
    ]),
    MatProgressSpinnerModule,
    MenuComponent,
    Ui5MainModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    InputComponent,
    ShellBarComponent,
    FileUploaderComponent,
    MediaGalleryComponent,
    TitleComponent,
    LinkComponent,
    MatButtonModule,
    ListComponent,
    ButtonComponent,
    IllustratedMessageComponent,
    Ui5WebcomponentsModule,
    AvatarComponent,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
   
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
   
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {  
  
}
