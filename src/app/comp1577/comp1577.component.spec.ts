import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1577Component } from './comp1577.component';

describe('Comp1577Component', () => {
  let component: Comp1577Component;
  let fixture: ComponentFixture<Comp1577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
