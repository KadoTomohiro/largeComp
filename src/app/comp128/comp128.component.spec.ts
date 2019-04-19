import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp128Component } from './comp128.component';

describe('Comp128Component', () => {
  let component: Comp128Component;
  let fixture: ComponentFixture<Comp128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
