import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1804Component } from './comp1804.component';

describe('Comp1804Component', () => {
  let component: Comp1804Component;
  let fixture: ComponentFixture<Comp1804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
