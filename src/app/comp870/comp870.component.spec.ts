import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp870Component } from './comp870.component';

describe('Comp870Component', () => {
  let component: Comp870Component;
  let fixture: ComponentFixture<Comp870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
