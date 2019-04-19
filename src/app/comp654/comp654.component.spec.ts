import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp654Component } from './comp654.component';

describe('Comp654Component', () => {
  let component: Comp654Component;
  let fixture: ComponentFixture<Comp654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
