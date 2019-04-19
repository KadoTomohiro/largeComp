import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1667Component } from './comp1667.component';

describe('Comp1667Component', () => {
  let component: Comp1667Component;
  let fixture: ComponentFixture<Comp1667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
