import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp354Component } from './comp354.component';

describe('Comp354Component', () => {
  let component: Comp354Component;
  let fixture: ComponentFixture<Comp354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
