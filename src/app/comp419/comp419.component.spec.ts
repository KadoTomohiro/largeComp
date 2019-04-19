import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp419Component } from './comp419.component';

describe('Comp419Component', () => {
  let component: Comp419Component;
  let fixture: ComponentFixture<Comp419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
