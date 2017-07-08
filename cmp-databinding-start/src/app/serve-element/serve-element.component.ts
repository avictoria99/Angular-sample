import { Component, 
  OnInit, 
  Input,
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  ContentChild,
  ElementRef,
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-serve-element',
  templateUrl: './serve-element.component.html',
  styleUrls: ['./serve-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServeElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
OnDestroy {@Input('julito') element: {type: string, name: string, content: string};
  @Input() name : string;
  @ContentChild('contentParagraph') paragraph : ElementRef;

  constructor() { 
    console.log ('constructor called');
  }

ngOnChanges (changes : SimpleChanges) {
  console.log ('OnChanges called');
  console.log (changes);
}

  ngOnInit() {
    console.log ('ngOnInit called');
    console.log ('paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log ('paragraph' + this.paragraph.nativeElement.textContent);
  }

    ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngOnDestroy () {
    console.log('ngOnDestroy called');
  }

}
