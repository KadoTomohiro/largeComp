import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1226Component } from './comp1226.component';

describe('Comp1226Component', () => {
  let component: Comp1226Component;
  let fixture: ComponentFixture<Comp1226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
