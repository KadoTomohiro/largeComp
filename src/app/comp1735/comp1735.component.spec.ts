import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1735Component } from './comp1735.component';

describe('Comp1735Component', () => {
  let component: Comp1735Component;
  let fixture: ComponentFixture<Comp1735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
