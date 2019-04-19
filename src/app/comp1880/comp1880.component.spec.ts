import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1880Component } from './comp1880.component';

describe('Comp1880Component', () => {
  let component: Comp1880Component;
  let fixture: ComponentFixture<Comp1880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
