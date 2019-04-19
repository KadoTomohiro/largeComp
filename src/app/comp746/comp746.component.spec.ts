import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp746Component } from './comp746.component';

describe('Comp746Component', () => {
  let component: Comp746Component;
  let fixture: ComponentFixture<Comp746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
