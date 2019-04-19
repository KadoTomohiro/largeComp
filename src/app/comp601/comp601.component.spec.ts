import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp601Component } from './comp601.component';

describe('Comp601Component', () => {
  let component: Comp601Component;
  let fixture: ComponentFixture<Comp601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
