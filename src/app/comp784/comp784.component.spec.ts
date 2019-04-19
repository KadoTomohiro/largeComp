import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp784Component } from './comp784.component';

describe('Comp784Component', () => {
  let component: Comp784Component;
  let fixture: ComponentFixture<Comp784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
