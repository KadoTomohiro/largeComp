import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1542Component } from './comp1542.component';

describe('Comp1542Component', () => {
  let component: Comp1542Component;
  let fixture: ComponentFixture<Comp1542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
