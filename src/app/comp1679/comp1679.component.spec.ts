import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1679Component } from './comp1679.component';

describe('Comp1679Component', () => {
  let component: Comp1679Component;
  let fixture: ComponentFixture<Comp1679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
