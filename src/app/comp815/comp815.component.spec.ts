import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp815Component } from './comp815.component';

describe('Comp815Component', () => {
  let component: Comp815Component;
  let fixture: ComponentFixture<Comp815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
