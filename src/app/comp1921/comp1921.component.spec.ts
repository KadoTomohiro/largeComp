import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1921Component } from './comp1921.component';

describe('Comp1921Component', () => {
  let component: Comp1921Component;
  let fixture: ComponentFixture<Comp1921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
