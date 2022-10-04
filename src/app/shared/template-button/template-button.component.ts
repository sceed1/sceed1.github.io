import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-template-button',
  templateUrl: './template-button.component.html',
  styleUrls: ['./template-button.component.scss']
})
export class TemplateButtonComponent {

  @Input() currentTemplate: TemplateRef<any>;
  @Input() disabled = false;

  @Output() buttonClicked = new EventEmitter<void>;

  triggerAction() {
    this.buttonClicked.emit();
  }

}
