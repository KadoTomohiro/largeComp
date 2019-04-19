import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp228Component } from './comp228.component';

describe('Comp228Component', () => {
  let component: Comp228Component;
  let fixture: ComponentFixture<Comp228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
