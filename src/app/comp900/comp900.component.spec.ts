import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp900Component } from './comp900.component';

describe('Comp900Component', () => {
  let component: Comp900Component;
  let fixture: ComponentFixture<Comp900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
