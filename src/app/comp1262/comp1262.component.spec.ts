import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1262Component } from './comp1262.component';

describe('Comp1262Component', () => {
  let component: Comp1262Component;
  let fixture: ComponentFixture<Comp1262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
