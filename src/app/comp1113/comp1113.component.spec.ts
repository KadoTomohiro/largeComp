import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1113Component } from './comp1113.component';

describe('Comp1113Component', () => {
  let component: Comp1113Component;
  let fixture: ComponentFixture<Comp1113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
