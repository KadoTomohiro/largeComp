import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp591Component } from './comp591.component';

describe('Comp591Component', () => {
  let component: Comp591Component;
  let fixture: ComponentFixture<Comp591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
