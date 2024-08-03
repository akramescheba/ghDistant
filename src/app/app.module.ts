import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstantesComponent } from './constantes/constantes.component';
import { AppComponent } from './app/Aapp.component';

@NgModule({
  declarations: [AppComponent, ConstantesComponent],
  imports: [CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
