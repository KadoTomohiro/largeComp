import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp245Component } from './comp245.component';

describe('Comp245Component', () => {
  let component: Comp245Component;
  let fixture: ComponentFixture<Comp245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
