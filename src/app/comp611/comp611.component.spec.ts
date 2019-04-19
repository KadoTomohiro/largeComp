import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp611Component } from './comp611.component';

describe('Comp611Component', () => {
  let component: Comp611Component;
  let fixture: ComponentFixture<Comp611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
