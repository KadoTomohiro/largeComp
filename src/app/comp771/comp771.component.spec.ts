import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp771Component } from './comp771.component';

describe('Comp771Component', () => {
  let component: Comp771Component;
  let fixture: ComponentFixture<Comp771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
