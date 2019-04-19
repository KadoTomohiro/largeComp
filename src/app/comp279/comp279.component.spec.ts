import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp279Component } from './comp279.component';

describe('Comp279Component', () => {
  let component: Comp279Component;
  let fixture: ComponentFixture<Comp279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
