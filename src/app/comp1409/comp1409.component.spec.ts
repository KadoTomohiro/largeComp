import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1409Component } from './comp1409.component';

describe('Comp1409Component', () => {
  let component: Comp1409Component;
  let fixture: ComponentFixture<Comp1409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
