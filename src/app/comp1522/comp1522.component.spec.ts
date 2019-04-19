import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1522Component } from './comp1522.component';

describe('Comp1522Component', () => {
  let component: Comp1522Component;
  let fixture: ComponentFixture<Comp1522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
