import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1507Component } from './comp1507.component';

describe('Comp1507Component', () => {
  let component: Comp1507Component;
  let fixture: ComponentFixture<Comp1507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
