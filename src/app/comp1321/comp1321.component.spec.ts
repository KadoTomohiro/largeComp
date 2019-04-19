import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1321Component } from './comp1321.component';

describe('Comp1321Component', () => {
  let component: Comp1321Component;
  let fixture: ComponentFixture<Comp1321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
