import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp948Component } from './comp948.component';

describe('Comp948Component', () => {
  let component: Comp948Component;
  let fixture: ComponentFixture<Comp948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
