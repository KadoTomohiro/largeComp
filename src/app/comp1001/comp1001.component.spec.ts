import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1001Component } from './comp1001.component';

describe('Comp1001Component', () => {
  let component: Comp1001Component;
  let fixture: ComponentFixture<Comp1001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
