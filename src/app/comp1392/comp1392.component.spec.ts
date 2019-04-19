import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1392Component } from './comp1392.component';

describe('Comp1392Component', () => {
  let component: Comp1392Component;
  let fixture: ComponentFixture<Comp1392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
