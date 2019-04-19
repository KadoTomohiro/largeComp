import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp326Component } from './comp326.component';

describe('Comp326Component', () => {
  let component: Comp326Component;
  let fixture: ComponentFixture<Comp326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
