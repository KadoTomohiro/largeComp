import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1136Component } from './comp1136.component';

describe('Comp1136Component', () => {
  let component: Comp1136Component;
  let fixture: ComponentFixture<Comp1136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
