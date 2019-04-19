import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp254Component } from './comp254.component';

describe('Comp254Component', () => {
  let component: Comp254Component;
  let fixture: ComponentFixture<Comp254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
