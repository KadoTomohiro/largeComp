import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1311Component } from './comp1311.component';

describe('Comp1311Component', () => {
  let component: Comp1311Component;
  let fixture: ComponentFixture<Comp1311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
