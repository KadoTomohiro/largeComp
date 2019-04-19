import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp399Component } from './comp399.component';

describe('Comp399Component', () => {
  let component: Comp399Component;
  let fixture: ComponentFixture<Comp399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
