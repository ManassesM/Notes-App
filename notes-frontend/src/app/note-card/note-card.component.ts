import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText: ElementRef<HTMLHtmlElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // work out if there is a text over and if not, then hide the truncator

    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      // if there is text overflow, show the fade out truncator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      // else (there is no text overflow), hide the fade out truncator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

}
