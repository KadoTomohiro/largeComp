import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1079Component } from './comp1079.component';

describe('Comp1079Component', () => {
  let component: Comp1079Component;
  let fixture: ComponentFixture<Comp1079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
