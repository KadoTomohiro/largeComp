import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1897Component } from './comp1897.component';

describe('Comp1897Component', () => {
  let component: Comp1897Component;
  let fixture: ComponentFixture<Comp1897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
