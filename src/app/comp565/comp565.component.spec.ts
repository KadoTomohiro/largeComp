import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp565Component } from './comp565.component';

describe('Comp565Component', () => {
  let component: Comp565Component;
  let fixture: ComponentFixture<Comp565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
