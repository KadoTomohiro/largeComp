import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1193Component } from './comp1193.component';

describe('Comp1193Component', () => {
  let component: Comp1193Component;
  let fixture: ComponentFixture<Comp1193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
