import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp775Component } from './comp775.component';

describe('Comp775Component', () => {
  let component: Comp775Component;
  let fixture: ComponentFixture<Comp775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
