import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp609Component } from './comp609.component';

describe('Comp609Component', () => {
  let component: Comp609Component;
  let fixture: ComponentFixture<Comp609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
