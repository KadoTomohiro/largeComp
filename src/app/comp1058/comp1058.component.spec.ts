import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1058Component } from './comp1058.component';

describe('Comp1058Component', () => {
  let component: Comp1058Component;
  let fixture: ComponentFixture<Comp1058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
