import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1908Component } from './comp1908.component';

describe('Comp1908Component', () => {
  let component: Comp1908Component;
  let fixture: ComponentFixture<Comp1908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
