import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1528Component } from './comp1528.component';

describe('Comp1528Component', () => {
  let component: Comp1528Component;
  let fixture: ComponentFixture<Comp1528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
