import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1922Component } from './comp1922.component';

describe('Comp1922Component', () => {
  let component: Comp1922Component;
  let fixture: ComponentFixture<Comp1922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
