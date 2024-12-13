import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddOnsService } from '../add-ons.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css',
})
export class AddOnsComponent {
  public monthly = true;
  public addOnsContainer: any = {};

  constructor(readonly addOnsService: AddOnsService) {}

  ngOnInit(): void {
    this.addOnsService.getAddOnsData().subscribe((data) => {
      this.addOnsContainer = data.add_ons;
    });
  }

  public getChecked(add_on: any): void {
    add_on.selected = !add_on.selected;
  }
}
