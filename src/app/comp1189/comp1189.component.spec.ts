import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1189Component } from './comp1189.component';

describe('Comp1189Component', () => {
  let component: Comp1189Component;
  let fixture: ComponentFixture<Comp1189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
