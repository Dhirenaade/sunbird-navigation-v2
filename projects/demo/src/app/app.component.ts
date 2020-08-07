import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'navigation Demo';
  pdfMetadataEvents: object;
  constructor() { }
  navigationConfig = {
      'isNavCtrl': true,
      'alignment': 'middle',
      'isLeftEnable': true,
      'isRightEnable': true,
      'isFirstPage': true,
      'isLastPage': false,
      'leftIcon': '',
      'rightIcon': '',
      'leftIconUrl': 'assets/previous.png',
      'rightIconUrl': 'assets/next.png',
      'iconSize': 'fa-3x'
};

  ngOnInit() {

  }

  public navigationHandler(event: any) {
    if ( (window as any).PDFViewerApplication) {
      event === 'next' ?
      (window as any).PDFViewerApplication.eventBus.dispatch('nextpage') :
      (window as any).PDFViewerApplication.eventBus.dispatch('previouspage');
    }
  }
}
