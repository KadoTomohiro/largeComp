import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp415Component } from './comp415.component';

describe('Comp415Component', () => {
  let component: Comp415Component;
  let fixture: ComponentFixture<Comp415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
