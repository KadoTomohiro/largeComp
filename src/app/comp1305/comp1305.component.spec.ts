import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1305Component } from './comp1305.component';

describe('Comp1305Component', () => {
  let component: Comp1305Component;
  let fixture: ComponentFixture<Comp1305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
