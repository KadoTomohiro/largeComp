import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1664Component } from './comp1664.component';

describe('Comp1664Component', () => {
  let component: Comp1664Component;
  let fixture: ComponentFixture<Comp1664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
