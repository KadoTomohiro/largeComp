import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1462Component } from './comp1462.component';

describe('Comp1462Component', () => {
  let component: Comp1462Component;
  let fixture: ComponentFixture<Comp1462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
