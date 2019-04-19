import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1280Component } from './comp1280.component';

describe('Comp1280Component', () => {
  let component: Comp1280Component;
  let fixture: ComponentFixture<Comp1280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
