import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp156Component } from './comp156.component';

describe('Comp156Component', () => {
  let component: Comp156Component;
  let fixture: ComponentFixture<Comp156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
