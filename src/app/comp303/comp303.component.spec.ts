import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp303Component } from './comp303.component';

describe('Comp303Component', () => {
  let component: Comp303Component;
  let fixture: ComponentFixture<Comp303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
