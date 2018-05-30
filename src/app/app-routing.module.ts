import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { IntroComponent } from './intro/intro.component';
import { MathContentComponent } from './math-content/math-content.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full'},
  { path: 'intro', component: IntroComponent },
  { path: 'alphabet', component: AlphabetComponent },
  { path: 'math', component: MathContentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
