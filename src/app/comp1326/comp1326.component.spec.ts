import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1326Component } from './comp1326.component';

describe('Comp1326Component', () => {
  let component: Comp1326Component;
  let fixture: ComponentFixture<Comp1326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
