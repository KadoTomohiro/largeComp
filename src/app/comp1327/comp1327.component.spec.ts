import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1327Component } from './comp1327.component';

describe('Comp1327Component', () => {
  let component: Comp1327Component;
  let fixture: ComponentFixture<Comp1327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
