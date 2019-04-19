import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp125Component } from './comp125.component';

describe('Comp125Component', () => {
  let component: Comp125Component;
  let fixture: ComponentFixture<Comp125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
