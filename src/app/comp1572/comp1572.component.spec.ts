import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1572Component } from './comp1572.component';

describe('Comp1572Component', () => {
  let component: Comp1572Component;
  let fixture: ComponentFixture<Comp1572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
