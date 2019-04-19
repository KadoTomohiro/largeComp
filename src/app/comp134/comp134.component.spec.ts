import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp134Component } from './comp134.component';

describe('Comp134Component', () => {
  let component: Comp134Component;
  let fixture: ComponentFixture<Comp134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
