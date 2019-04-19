import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp414Component } from './comp414.component';

describe('Comp414Component', () => {
  let component: Comp414Component;
  let fixture: ComponentFixture<Comp414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
