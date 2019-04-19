import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1706Component } from './comp1706.component';

describe('Comp1706Component', () => {
  let component: Comp1706Component;
  let fixture: ComponentFixture<Comp1706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
