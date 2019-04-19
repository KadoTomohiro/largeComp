import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1173Component } from './comp1173.component';

describe('Comp1173Component', () => {
  let component: Comp1173Component;
  let fixture: ComponentFixture<Comp1173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
