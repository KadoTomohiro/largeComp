import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1593Component } from './comp1593.component';

describe('Comp1593Component', () => {
  let component: Comp1593Component;
  let fixture: ComponentFixture<Comp1593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
