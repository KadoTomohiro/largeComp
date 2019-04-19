import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp496Component } from './comp496.component';

describe('Comp496Component', () => {
  let component: Comp496Component;
  let fixture: ComponentFixture<Comp496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
