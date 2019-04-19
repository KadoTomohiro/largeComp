import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp246Component } from './comp246.component';

describe('Comp246Component', () => {
  let component: Comp246Component;
  let fixture: ComponentFixture<Comp246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
