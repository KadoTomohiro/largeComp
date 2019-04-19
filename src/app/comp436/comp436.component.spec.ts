import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp436Component } from './comp436.component';

describe('Comp436Component', () => {
  let component: Comp436Component;
  let fixture: ComponentFixture<Comp436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
