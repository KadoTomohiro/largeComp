import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1738Component } from './comp1738.component';

describe('Comp1738Component', () => {
  let component: Comp1738Component;
  let fixture: ComponentFixture<Comp1738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});