import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1568Component } from './comp1568.component';

describe('Comp1568Component', () => {
  let component: Comp1568Component;
  let fixture: ComponentFixture<Comp1568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
