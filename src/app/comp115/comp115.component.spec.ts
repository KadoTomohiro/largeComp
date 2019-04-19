import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp115Component } from './comp115.component';

describe('Comp115Component', () => {
  let component: Comp115Component;
  let fixture: ComponentFixture<Comp115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
