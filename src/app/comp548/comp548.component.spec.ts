import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp548Component } from './comp548.component';

describe('Comp548Component', () => {
  let component: Comp548Component;
  let fixture: ComponentFixture<Comp548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
