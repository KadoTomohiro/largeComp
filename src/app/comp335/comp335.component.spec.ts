import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp335Component } from './comp335.component';

describe('Comp335Component', () => {
  let component: Comp335Component;
  let fixture: ComponentFixture<Comp335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
