import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1850Component } from './comp1850.component';

describe('Comp1850Component', () => {
  let component: Comp1850Component;
  let fixture: ComponentFixture<Comp1850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
