import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp373Component } from './comp373.component';

describe('Comp373Component', () => {
  let component: Comp373Component;
  let fixture: ComponentFixture<Comp373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
