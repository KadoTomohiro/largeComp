import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1884Component } from './comp1884.component';

describe('Comp1884Component', () => {
  let component: Comp1884Component;
  let fixture: ComponentFixture<Comp1884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
