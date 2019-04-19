import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp351Component } from './comp351.component';

describe('Comp351Component', () => {
  let component: Comp351Component;
  let fixture: ComponentFixture<Comp351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
