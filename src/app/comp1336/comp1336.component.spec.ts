import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1336Component } from './comp1336.component';

describe('Comp1336Component', () => {
  let component: Comp1336Component;
  let fixture: ComponentFixture<Comp1336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
