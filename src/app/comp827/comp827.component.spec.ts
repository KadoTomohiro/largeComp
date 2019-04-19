import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp827Component } from './comp827.component';

describe('Comp827Component', () => {
  let component: Comp827Component;
  let fixture: ComponentFixture<Comp827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
