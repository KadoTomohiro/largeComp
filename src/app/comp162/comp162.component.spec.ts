import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp162Component } from './comp162.component';

describe('Comp162Component', () => {
  let component: Comp162Component;
  let fixture: ComponentFixture<Comp162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
