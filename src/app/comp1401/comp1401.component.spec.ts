import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1401Component } from './comp1401.component';

describe('Comp1401Component', () => {
  let component: Comp1401Component;
  let fixture: ComponentFixture<Comp1401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
