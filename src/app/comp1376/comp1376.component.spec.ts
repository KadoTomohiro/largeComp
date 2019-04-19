import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1376Component } from './comp1376.component';

describe('Comp1376Component', () => {
  let component: Comp1376Component;
  let fixture: ComponentFixture<Comp1376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
