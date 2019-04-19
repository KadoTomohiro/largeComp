import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1133Component } from './comp1133.component';

describe('Comp1133Component', () => {
  let component: Comp1133Component;
  let fixture: ComponentFixture<Comp1133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
