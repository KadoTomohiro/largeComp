import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp486Component } from './comp486.component';

describe('Comp486Component', () => {
  let component: Comp486Component;
  let fixture: ComponentFixture<Comp486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
