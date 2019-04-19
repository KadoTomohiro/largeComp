import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp300Component } from './comp300.component';

describe('Comp300Component', () => {
  let component: Comp300Component;
  let fixture: ComponentFixture<Comp300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
