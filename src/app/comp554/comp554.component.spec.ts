import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp554Component } from './comp554.component';

describe('Comp554Component', () => {
  let component: Comp554Component;
  let fixture: ComponentFixture<Comp554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
