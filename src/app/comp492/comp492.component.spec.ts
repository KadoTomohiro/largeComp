import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp492Component } from './comp492.component';

describe('Comp492Component', () => {
  let component: Comp492Component;
  let fixture: ComponentFixture<Comp492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
