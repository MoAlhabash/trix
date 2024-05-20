import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatGridListModule, 
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule, 
    MatIconModule,
    FormsModule,
    CommonModule,
    MatCheckboxModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trix';

  latesh?: number | null;

  denar?: number | null;

  banatOn?: number | null;

  banatOnDouble?: number | null;

  banatFor?: number | null;

  khetearOn?: number | null;

  khetearFor?: number | null;

  oldScore?: number | null;

  checked: boolean = false;

  sum?: number;

  constructor(private cdr: ChangeDetectorRef) {}

  summe(): number {
    return ((
      this.checkValue(this.latesh) * 15 +
      this.checkValue(this.denar) * 10 + 
      this.checkValue(this.banatOn) * 25 + 
      this.checkValue(this.banatOnDouble) * 50 +
      this.checkValue(this.khetearOn) * (this.checked ? 150 : 75)) * -1) + 
      this.checkValue(this.banatFor) * 25 + 
      this.checkValue(this.khetearFor) * 75 + 
      this.checkValue(this.oldScore);
  }

  checkValue(value: number | undefined | null) : number {
    return value ? value : 0;
  }
}
