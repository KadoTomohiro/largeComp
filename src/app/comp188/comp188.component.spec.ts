import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp188Component } from './comp188.component';

describe('Comp188Component', () => {
  let component: Comp188Component;
  let fixture: ComponentFixture<Comp188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
