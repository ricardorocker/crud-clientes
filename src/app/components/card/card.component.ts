import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Output() okClick = new EventEmitter<void>();
  @Input() feedbackMessage: string = '';
  @Input() successMessage: boolean = true;

  ngOnInit(): void {
      console.log(this.successMessage)
  }

  onOkClick() {
    this.okClick.emit();
  }
}
