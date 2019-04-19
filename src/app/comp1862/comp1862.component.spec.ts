import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1862Component } from './comp1862.component';

describe('Comp1862Component', () => {
  let component: Comp1862Component;
  let fixture: ComponentFixture<Comp1862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
