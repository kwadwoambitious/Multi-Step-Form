import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  public successful = true;
  public isMonthly = true;
  public message = `Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com`;
}
