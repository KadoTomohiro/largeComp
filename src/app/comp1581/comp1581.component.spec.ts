import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1581Component } from './comp1581.component';

describe('Comp1581Component', () => {
  let component: Comp1581Component;
  let fixture: ComponentFixture<Comp1581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
