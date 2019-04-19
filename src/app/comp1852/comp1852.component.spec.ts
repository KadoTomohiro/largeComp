import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1852Component } from './comp1852.component';

describe('Comp1852Component', () => {
  let component: Comp1852Component;
  let fixture: ComponentFixture<Comp1852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
