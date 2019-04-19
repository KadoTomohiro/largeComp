import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1606Component } from './comp1606.component';

describe('Comp1606Component', () => {
  let component: Comp1606Component;
  let fixture: ComponentFixture<Comp1606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
