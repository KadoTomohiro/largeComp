import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1166Component } from './comp1166.component';

describe('Comp1166Component', () => {
  let component: Comp1166Component;
  let fixture: ComponentFixture<Comp1166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
