import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp406Component } from './comp406.component';

describe('Comp406Component', () => {
  let component: Comp406Component;
  let fixture: ComponentFixture<Comp406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
