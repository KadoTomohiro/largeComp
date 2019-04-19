import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1367Component } from './comp1367.component';

describe('Comp1367Component', () => {
  let component: Comp1367Component;
  let fixture: ComponentFixture<Comp1367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
