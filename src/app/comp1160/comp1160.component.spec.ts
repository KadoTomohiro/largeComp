import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1160Component } from './comp1160.component';

describe('Comp1160Component', () => {
  let component: Comp1160Component;
  let fixture: ComponentFixture<Comp1160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
