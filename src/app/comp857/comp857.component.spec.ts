import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp857Component } from './comp857.component';

describe('Comp857Component', () => {
  let component: Comp857Component;
  let fixture: ComponentFixture<Comp857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
