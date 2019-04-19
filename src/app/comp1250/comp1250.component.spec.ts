import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1250Component } from './comp1250.component';

describe('Comp1250Component', () => {
  let component: Comp1250Component;
  let fixture: ComponentFixture<Comp1250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
