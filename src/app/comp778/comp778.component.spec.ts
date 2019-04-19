import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp778Component } from './comp778.component';

describe('Comp778Component', () => {
  let component: Comp778Component;
  let fixture: ComponentFixture<Comp778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
