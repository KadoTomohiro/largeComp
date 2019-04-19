import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp921Component } from './comp921.component';

describe('Comp921Component', () => {
  let component: Comp921Component;
  let fixture: ComponentFixture<Comp921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
