import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp717Component } from './comp717.component';

describe('Comp717Component', () => {
  let component: Comp717Component;
  let fixture: ComponentFixture<Comp717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
