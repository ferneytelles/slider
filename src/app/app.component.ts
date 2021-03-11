import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'slider';

  @ViewChild('input_left', {static: true}) inputLeft: ElementRef;
  @ViewChild('input_right', {static: true}) inputRight: ElementRef;
  
  @ViewChild('thumb_left', {static: true}) thumbLeft: ElementRef;
  @ViewChild('thumb_right', {static: true}) thumbRight: ElementRef;
  @ViewChild('range', {static: true}) range: ElementRef;

  @ViewChild('min_value',{static: true}) minValue: ElementRef; 
  @ViewChild('max_value',{static: true}) maxValue: ElementRef;

  constructor(){
    
  }
  
  ngOnInit(): void {

    this.inputLeft.nativeElement.addEventListener("input", () => {
      this.setLeftValue();
    });

    this.inputRight.nativeElement.addEventListener("input", () => {
      this.setRightValue();
    });

    ////////////////////////////// LEFT //////////////////////////////////////
    this.inputLeft.nativeElement.addEventListener('mouseover', () => {
      this.thumbLeft.nativeElement.classList.add("hover");
    });
    this.inputLeft.nativeElement.addEventListener('mouseout', () =>{ 
      this.thumbLeft.nativeElement.classList.remove("hover");
    });
    this.inputLeft.nativeElement.addEventListener('mousedown', () => {
      this.thumbLeft.nativeElement.classList.add("active");
    });
    this.inputLeft.nativeElement.addEventListener('mouseup', () => {
      this.thumbLeft.nativeElement.classList.remove("active");
    });

    ////////////////////////////// RIGHT //////////////////////////////////////
    this.inputRight.nativeElement.addEventListener('mouseover', () => {
      this.thumbRight.nativeElement.classList.add("hover");
    });
    this.inputRight.nativeElement.addEventListener('mouseout', () =>{ 
      this.thumbRight.nativeElement.classList.remove("hover");
    });
    this.inputRight.nativeElement.addEventListener('mousedown', () => {
      this.thumbRight.nativeElement.classList.add("active");
    });
    this.inputRight.nativeElement.addEventListener('mouseup', () => {
      this.thumbRight.nativeElement.classList.remove("active");
    });

  }

  setLeftValue() {
  
    var _this = this.inputLeft.nativeElement, 
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(this.inputRight.nativeElement.value) - 10);

    var percent = ((_this.value - min) / (max - min)) * 100;

    this.thumbLeft.nativeElement.style.left = `${percent}%`;
    this.range.nativeElement.style.left = `${percent}%`;
    this.minValue.nativeElement.value = `${percent}`;
  }
  setRightValue(){
    var _this = this.inputRight.nativeElement,
      min = parseInt(_this.min),
      max = parseInt(_this.max);
    
    _this.value = Math.max(parseInt(_this.value), parseInt(this.inputLeft.nativeElement.value) + 10);

    var percent = ((_this.value - min) / (max - min)) * 100;

    this.thumbRight.nativeElement.style.right = `${100-percent}%`;
    this.range.nativeElement.style.right = `${100-percent}%`;

    this.maxValue.nativeElement.value = `${percent}`;
      
  } 

}