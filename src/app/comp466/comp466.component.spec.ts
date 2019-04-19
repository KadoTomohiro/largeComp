import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp466Component } from './comp466.component';

describe('Comp466Component', () => {
  let component: Comp466Component;
  let fixture: ComponentFixture<Comp466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
