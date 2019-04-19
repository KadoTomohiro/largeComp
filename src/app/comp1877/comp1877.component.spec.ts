import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1877Component } from './comp1877.component';

describe('Comp1877Component', () => {
  let component: Comp1877Component;
  let fixture: ComponentFixture<Comp1877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
