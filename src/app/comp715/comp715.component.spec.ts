import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp715Component } from './comp715.component';

describe('Comp715Component', () => {
  let component: Comp715Component;
  let fixture: ComponentFixture<Comp715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
