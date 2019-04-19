import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1997Component } from './comp1997.component';

describe('Comp1997Component', () => {
  let component: Comp1997Component;
  let fixture: ComponentFixture<Comp1997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
