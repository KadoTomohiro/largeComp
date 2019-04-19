import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp593Component } from './comp593.component';

describe('Comp593Component', () => {
  let component: Comp593Component;
  let fixture: ComponentFixture<Comp593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
