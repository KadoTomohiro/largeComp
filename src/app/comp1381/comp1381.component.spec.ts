import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1381Component } from './comp1381.component';

describe('Comp1381Component', () => {
  let component: Comp1381Component;
  let fixture: ComponentFixture<Comp1381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
