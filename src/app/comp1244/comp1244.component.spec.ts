import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1244Component } from './comp1244.component';

describe('Comp1244Component', () => {
  let component: Comp1244Component;
  let fixture: ComponentFixture<Comp1244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
