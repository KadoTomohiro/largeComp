import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1167Component } from './comp1167.component';

describe('Comp1167Component', () => {
  let component: Comp1167Component;
  let fixture: ComponentFixture<Comp1167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
