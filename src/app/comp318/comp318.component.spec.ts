import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp318Component } from './comp318.component';

describe('Comp318Component', () => {
  let component: Comp318Component;
  let fixture: ComponentFixture<Comp318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
