import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1075Component } from './comp1075.component';

describe('Comp1075Component', () => {
  let component: Comp1075Component;
  let fixture: ComponentFixture<Comp1075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
