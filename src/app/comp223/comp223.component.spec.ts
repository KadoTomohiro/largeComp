import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp223Component } from './comp223.component';

describe('Comp223Component', () => {
  let component: Comp223Component;
  let fixture: ComponentFixture<Comp223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
