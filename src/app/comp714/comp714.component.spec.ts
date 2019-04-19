import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp714Component } from './comp714.component';

describe('Comp714Component', () => {
  let component: Comp714Component;
  let fixture: ComponentFixture<Comp714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
