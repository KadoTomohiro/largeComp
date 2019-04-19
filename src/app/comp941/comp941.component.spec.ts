import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp941Component } from './comp941.component';

describe('Comp941Component', () => {
  let component: Comp941Component;
  let fixture: ComponentFixture<Comp941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
