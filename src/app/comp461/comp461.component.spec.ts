import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp461Component } from './comp461.component';

describe('Comp461Component', () => {
  let component: Comp461Component;
  let fixture: ComponentFixture<Comp461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
