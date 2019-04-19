import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1453Component } from './comp1453.component';

describe('Comp1453Component', () => {
  let component: Comp1453Component;
  let fixture: ComponentFixture<Comp1453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
