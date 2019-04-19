import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1104Component } from './comp1104.component';

describe('Comp1104Component', () => {
  let component: Comp1104Component;
  let fixture: ComponentFixture<Comp1104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
