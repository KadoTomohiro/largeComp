import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp634Component } from './comp634.component';

describe('Comp634Component', () => {
  let component: Comp634Component;
  let fixture: ComponentFixture<Comp634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
