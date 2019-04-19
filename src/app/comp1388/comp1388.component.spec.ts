import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1388Component } from './comp1388.component';

describe('Comp1388Component', () => {
  let component: Comp1388Component;
  let fixture: ComponentFixture<Comp1388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
