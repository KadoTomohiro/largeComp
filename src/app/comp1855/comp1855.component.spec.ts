import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1855Component } from './comp1855.component';

describe('Comp1855Component', () => {
  let component: Comp1855Component;
  let fixture: ComponentFixture<Comp1855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
