import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp792Component } from './comp792.component';

describe('Comp792Component', () => {
  let component: Comp792Component;
  let fixture: ComponentFixture<Comp792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
