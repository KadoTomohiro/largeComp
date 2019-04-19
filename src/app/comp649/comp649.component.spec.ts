import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp649Component } from './comp649.component';

describe('Comp649Component', () => {
  let component: Comp649Component;
  let fixture: ComponentFixture<Comp649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
