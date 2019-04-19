import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1843Component } from './comp1843.component';

describe('Comp1843Component', () => {
  let component: Comp1843Component;
  let fixture: ComponentFixture<Comp1843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
