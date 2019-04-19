import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1110Component } from './comp1110.component';

describe('Comp1110Component', () => {
  let component: Comp1110Component;
  let fixture: ComponentFixture<Comp1110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
