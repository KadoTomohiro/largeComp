import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp481Component } from './comp481.component';

describe('Comp481Component', () => {
  let component: Comp481Component;
  let fixture: ComponentFixture<Comp481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
