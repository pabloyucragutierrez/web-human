import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;
  
  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;

  constructor(private renderer: Renderer2) {}

  
  onDragStart(event: MouseEvent | TouchEvent) {
    this.isDragging = true;

    const container = this.sliderContainer.nativeElement;
    
    
    this.renderer.addClass(container, 'dragging');

    if (event instanceof MouseEvent) {
      this.startX = event.pageX - container.offsetLeft;
    } else {
      this.startX = event.touches[0].pageX - container.offsetLeft;
    }

    this.scrollLeft = container.scrollLeft;
  }

  
  onDragging(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;

    const container = this.sliderContainer.nativeElement;
    let x;

    if (event instanceof MouseEvent) {
      x = event.pageX - container.offsetLeft;
    } else {
      x = event.touches[0].pageX - container.offsetLeft;
    }

    const walk = (x - this.startX) * 2; 
    container.scrollLeft = this.scrollLeft - walk;
  }

  onDragEnd() {
    this.isDragging = false;

    const container = this.sliderContainer.nativeElement;
    this.renderer.removeClass(container, 'dragging');
  }
}
