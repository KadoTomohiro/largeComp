import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp585Component } from './comp585.component';

describe('Comp585Component', () => {
  let component: Comp585Component;
  let fixture: ComponentFixture<Comp585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
