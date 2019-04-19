import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1064Component } from './comp1064.component';

describe('Comp1064Component', () => {
  let component: Comp1064Component;
  let fixture: ComponentFixture<Comp1064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
