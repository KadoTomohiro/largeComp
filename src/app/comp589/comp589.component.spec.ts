import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp589Component } from './comp589.component';

describe('Comp589Component', () => {
  let component: Comp589Component;
  let fixture: ComponentFixture<Comp589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
