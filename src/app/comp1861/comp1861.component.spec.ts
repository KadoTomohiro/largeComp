import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1861Component } from './comp1861.component';

describe('Comp1861Component', () => {
  let component: Comp1861Component;
  let fixture: ComponentFixture<Comp1861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
