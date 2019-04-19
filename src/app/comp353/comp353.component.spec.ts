import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp353Component } from './comp353.component';

describe('Comp353Component', () => {
  let component: Comp353Component;
  let fixture: ComponentFixture<Comp353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
