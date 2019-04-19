import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1493Component } from './comp1493.component';

describe('Comp1493Component', () => {
  let component: Comp1493Component;
  let fixture: ComponentFixture<Comp1493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
