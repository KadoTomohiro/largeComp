import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1190Component } from './comp1190.component';

describe('Comp1190Component', () => {
  let component: Comp1190Component;
  let fixture: ComponentFixture<Comp1190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
