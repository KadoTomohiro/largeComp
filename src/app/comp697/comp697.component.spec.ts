import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp697Component } from './comp697.component';

describe('Comp697Component', () => {
  let component: Comp697Component;
  let fixture: ComponentFixture<Comp697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
