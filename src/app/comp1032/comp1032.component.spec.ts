import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1032Component } from './comp1032.component';

describe('Comp1032Component', () => {
  let component: Comp1032Component;
  let fixture: ComponentFixture<Comp1032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
