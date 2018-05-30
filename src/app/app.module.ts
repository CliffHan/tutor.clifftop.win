import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Form Controls
import { MatCheckboxModule, MatInputModule, MatSelectModule } from '@angular/material';
//Navigation
import { MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
//Layout
import { MatCardModule, MatDividerModule, MatExpansionModule, MatListModule } from '@angular/material';
//Buttons & Indicators
import { MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
//Popups & Modals
//Data table

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MathContentComponent } from './math-content/math-content.component';
import { IntroComponent } from './intro/intro.component';
import { AlphabetComponent } from './alphabet/alphabet.component';

@NgModule({
  declarations: [
    AppComponent,
    MathContentComponent,
    IntroComponent,
    AlphabetComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCheckboxModule, MatInputModule, MatSelectModule,
    MatMenuModule, MatSidenavModule, MatToolbarModule,
    MatCardModule, MatDividerModule, MatExpansionModule, MatListModule,
    MatButtonModule, MatButtonToggleModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
