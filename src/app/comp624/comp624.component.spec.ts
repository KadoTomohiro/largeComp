import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp624Component } from './comp624.component';

describe('Comp624Component', () => {
  let component: Comp624Component;
  let fixture: ComponentFixture<Comp624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
