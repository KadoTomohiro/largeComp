import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp835Component } from './comp835.component';

describe('Comp835Component', () => {
  let component: Comp835Component;
  let fixture: ComponentFixture<Comp835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
