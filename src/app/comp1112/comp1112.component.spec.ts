import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1112Component } from './comp1112.component';

describe('Comp1112Component', () => {
  let component: Comp1112Component;
  let fixture: ComponentFixture<Comp1112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
