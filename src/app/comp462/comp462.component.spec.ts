import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp462Component } from './comp462.component';

describe('Comp462Component', () => {
  let component: Comp462Component;
  let fixture: ComponentFixture<Comp462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
