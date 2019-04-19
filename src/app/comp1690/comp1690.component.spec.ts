import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1690Component } from './comp1690.component';

describe('Comp1690Component', () => {
  let component: Comp1690Component;
  let fixture: ComponentFixture<Comp1690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
