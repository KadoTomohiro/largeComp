import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1819Component } from './comp1819.component';

describe('Comp1819Component', () => {
  let component: Comp1819Component;
  let fixture: ComponentFixture<Comp1819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
