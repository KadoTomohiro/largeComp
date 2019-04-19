import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp742Component } from './comp742.component';

describe('Comp742Component', () => {
  let component: Comp742Component;
  let fixture: ComponentFixture<Comp742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
