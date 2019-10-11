import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  @ViewChild('someInput', {static: true}) someInput: ElementRef;
  firstNumber: number = 1;
  isTrue : boolean = false;
  constructor() { }

  ngOnInit() {


  }

  onLog(){
    console.log(this.someInput.nativeElement.value);
  }
  getValue(secondNumber: Object): boolean{

    if (this.firstNumber == secondNumber){
      console.log("Value are equal");
      this.isTrue = true;
    }
    return this.isTrue;
  }
}
