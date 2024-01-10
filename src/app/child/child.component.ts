import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [NumberService, StringService]
})
export class ChildComponent {

  public value = "Marvellous InfoSystem Web Development MEAN";
  public count : number = 0;

  public no : number = 15;
  public result : string = "";

  constructor(private stringObj : StringService, private numberObj : NumberService) {
    this.count = this.stringObj.countCapital(this.value);
    this.result = this.numberObj.chkPrime(this.no);
  }

}
