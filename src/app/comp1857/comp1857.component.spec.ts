import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1857Component } from './comp1857.component';

describe('Comp1857Component', () => {
  let component: Comp1857Component;
  let fixture: ComponentFixture<Comp1857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
