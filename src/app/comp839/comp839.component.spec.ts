import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp839Component } from './comp839.component';

describe('Comp839Component', () => {
  let component: Comp839Component;
  let fixture: ComponentFixture<Comp839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
