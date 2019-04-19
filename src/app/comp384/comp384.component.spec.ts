import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp384Component } from './comp384.component';

describe('Comp384Component', () => {
  let component: Comp384Component;
  let fixture: ComponentFixture<Comp384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
