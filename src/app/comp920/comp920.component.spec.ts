import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp920Component } from './comp920.component';

describe('Comp920Component', () => {
  let component: Comp920Component;
  let fixture: ComponentFixture<Comp920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
