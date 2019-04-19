import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1723Component } from './comp1723.component';

describe('Comp1723Component', () => {
  let component: Comp1723Component;
  let fixture: ComponentFixture<Comp1723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
