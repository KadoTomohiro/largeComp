import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1129Component } from './comp1129.component';

describe('Comp1129Component', () => {
  let component: Comp1129Component;
  let fixture: ComponentFixture<Comp1129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
