import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp261Component } from './comp261.component';

describe('Comp261Component', () => {
  let component: Comp261Component;
  let fixture: ComponentFixture<Comp261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
