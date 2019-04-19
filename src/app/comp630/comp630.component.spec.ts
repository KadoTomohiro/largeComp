import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp630Component } from './comp630.component';

describe('Comp630Component', () => {
  let component: Comp630Component;
  let fixture: ComponentFixture<Comp630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
