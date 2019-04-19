import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1725Component } from './comp1725.component';

describe('Comp1725Component', () => {
  let component: Comp1725Component;
  let fixture: ComponentFixture<Comp1725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
