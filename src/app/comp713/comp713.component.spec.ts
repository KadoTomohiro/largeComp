import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp713Component } from './comp713.component';

describe('Comp713Component', () => {
  let component: Comp713Component;
  let fixture: ComponentFixture<Comp713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
