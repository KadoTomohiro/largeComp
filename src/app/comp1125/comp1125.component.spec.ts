import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1125Component } from './comp1125.component';

describe('Comp1125Component', () => {
  let component: Comp1125Component;
  let fixture: ComponentFixture<Comp1125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
