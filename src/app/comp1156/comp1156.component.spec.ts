import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1156Component } from './comp1156.component';

describe('Comp1156Component', () => {
  let component: Comp1156Component;
  let fixture: ComponentFixture<Comp1156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
