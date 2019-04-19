import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1240Component } from './comp1240.component';

describe('Comp1240Component', () => {
  let component: Comp1240Component;
  let fixture: ComponentFixture<Comp1240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
