import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp490Component } from './comp490.component';

describe('Comp490Component', () => {
  let component: Comp490Component;
  let fixture: ComponentFixture<Comp490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
