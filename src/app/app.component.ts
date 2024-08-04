import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConstantesComponent } from './constantes/constantes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ConstantesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exogit';
}
