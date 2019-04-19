import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp868Component } from './comp868.component';

describe('Comp868Component', () => {
  let component: Comp868Component;
  let fixture: ComponentFixture<Comp868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
