import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp409Component } from './comp409.component';

describe('Comp409Component', () => {
  let component: Comp409Component;
  let fixture: ComponentFixture<Comp409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
