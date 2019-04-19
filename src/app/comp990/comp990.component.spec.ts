import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp990Component } from './comp990.component';

describe('Comp990Component', () => {
  let component: Comp990Component;
  let fixture: ComponentFixture<Comp990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
