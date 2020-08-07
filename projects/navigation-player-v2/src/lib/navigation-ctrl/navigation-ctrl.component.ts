import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { NavComponentInput, navEvent } from './Events';

@Component({
  selector: 'sb-navigation-ctrl',
  templateUrl: './navigation-ctrl.component.html',
  styleUrls: ['./navigation-ctrl.component.css']
})
export class NavigationCtrlComponent implements OnInit {
  @Input() navConfig: NavComponentInput;
  @Output() sendControls: EventEmitter<navEvent> = new EventEmitter<navEvent>();
  constructor() {}

  ngOnInit() {
  }

  nextPage() {
    this.sendControls.emit('next');
  }
  prevPage() {
    this.sendControls.emit('previous');
  }

}
