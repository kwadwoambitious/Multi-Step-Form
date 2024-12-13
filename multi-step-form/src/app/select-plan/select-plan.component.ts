import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectPlanService } from '../select-plan.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css'],
})
export class SelectPlanComponent implements OnInit {
  public selectPlanContainer: any = {};
  public isToggled = false;
  public selectedPlan = 'arcade';

  constructor(private selectPlanService: SelectPlanService) {}

  ngOnInit(): void {
    this.selectedPlan = localStorage.getItem('selectedPlan') ?? 'arcade';

    const storedValue = localStorage.getItem('selectedDuration');
    this.isToggled = storedValue ? JSON.parse(storedValue) : false;

    this.selectPlanService.getPlansData().subscribe((data) => {
      this.selectPlanContainer = data.plans;
    });
  }

  public selectPlan(planName: string): void {
    this.selectedPlan = planName;
    this.saveChanges();
  }

  public toggleDuration(): void {
    this.isToggled = !this.isToggled;
    this.saveChanges();
  }

  public saveChanges(): void {
    localStorage.setItem('selectedPlan', this.selectedPlan);
    localStorage.setItem('selectedDuration', String(this.isToggled));
  }
}
