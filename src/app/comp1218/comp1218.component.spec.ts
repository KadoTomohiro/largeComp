import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1218Component } from './comp1218.component';

describe('Comp1218Component', () => {
  let component: Comp1218Component;
  let fixture: ComponentFixture<Comp1218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
