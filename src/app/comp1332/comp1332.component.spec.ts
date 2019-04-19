import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1332Component } from './comp1332.component';

describe('Comp1332Component', () => {
  let component: Comp1332Component;
  let fixture: ComponentFixture<Comp1332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
