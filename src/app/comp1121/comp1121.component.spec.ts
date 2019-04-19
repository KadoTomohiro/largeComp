import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1121Component } from './comp1121.component';

describe('Comp1121Component', () => {
  let component: Comp1121Component;
  let fixture: ComponentFixture<Comp1121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
