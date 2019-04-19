import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1898Component } from './comp1898.component';

describe('Comp1898Component', () => {
  let component: Comp1898Component;
  let fixture: ComponentFixture<Comp1898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
