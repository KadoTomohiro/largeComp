import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1809Component } from './comp1809.component';

describe('Comp1809Component', () => {
  let component: Comp1809Component;
  let fixture: ComponentFixture<Comp1809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
