import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp583Component } from './comp583.component';

describe('Comp583Component', () => {
  let component: Comp583Component;
  let fixture: ComponentFixture<Comp583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
