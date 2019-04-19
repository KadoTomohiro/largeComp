import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp459Component } from './comp459.component';

describe('Comp459Component', () => {
  let component: Comp459Component;
  let fixture: ComponentFixture<Comp459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
