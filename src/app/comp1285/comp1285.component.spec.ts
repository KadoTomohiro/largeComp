import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1285Component } from './comp1285.component';

describe('Comp1285Component', () => {
  let component: Comp1285Component;
  let fixture: ComponentFixture<Comp1285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
