import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Output() okClick = new EventEmitter<void>();
  @Input() feedbackMessage: string = '';
  @Input() successMessage: boolean = true;

  onOkClick() {
    this.okClick.emit();
  }
}
