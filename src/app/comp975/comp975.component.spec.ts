import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp975Component } from './comp975.component';

describe('Comp975Component', () => {
  let component: Comp975Component;
  let fixture: ComponentFixture<Comp975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
