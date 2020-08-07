import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationV2Component } from './navigation-v2.component';

describe('PdfPlayerV2Component', () => {
  let component: NavigationV2Component;
  let fixture: ComponentFixture<NavigationV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
