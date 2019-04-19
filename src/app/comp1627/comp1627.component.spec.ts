import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1627Component } from './comp1627.component';

describe('Comp1627Component', () => {
  let component: Comp1627Component;
  let fixture: ComponentFixture<Comp1627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
