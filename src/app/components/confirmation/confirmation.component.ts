import { Component } from '@angular/core';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  name: string = '';
  total: number = 0;

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.name = this.infoService.name;
    this.total = this.infoService.total;
  }

}
