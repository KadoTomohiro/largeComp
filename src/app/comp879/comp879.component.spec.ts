import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp879Component } from './comp879.component';

describe('Comp879Component', () => {
  let component: Comp879Component;
  let fixture: ComponentFixture<Comp879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
