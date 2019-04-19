import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1180Component } from './comp1180.component';

describe('Comp1180Component', () => {
  let component: Comp1180Component;
  let fixture: ComponentFixture<Comp1180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
