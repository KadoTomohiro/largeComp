import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp295Component } from './comp295.component';

describe('Comp295Component', () => {
  let component: Comp295Component;
  let fixture: ComponentFixture<Comp295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
