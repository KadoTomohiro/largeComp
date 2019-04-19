import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1216Component } from './comp1216.component';

describe('Comp1216Component', () => {
  let component: Comp1216Component;
  let fixture: ComponentFixture<Comp1216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
