import { HostListener, Directive, Renderer2, ElementRef, OnInit, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
   @Input() defaultColor: string = 'transparent';
   // tslint:disable-next-line:no-input-rename
   @Input('appBetterHighlight') highlightColor: string = 'blue';
   @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;
   @HostBinding('style.color') color = 'black';

  // constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    //  this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
     this.backgroundColor = this.highlightColor;
     this.color = 'yellow';
  }

 @HostListener('mouseleave') mouseleave(eventData: Event) {
    //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    //  this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = this.defaultColor;
    this.color = 'black';
   }


}
