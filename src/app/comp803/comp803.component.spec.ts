import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp803Component } from './comp803.component';

describe('Comp803Component', () => {
  let component: Comp803Component;
  let fixture: ComponentFixture<Comp803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
