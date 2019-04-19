import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp706Component } from './comp706.component';

describe('Comp706Component', () => {
  let component: Comp706Component;
  let fixture: ComponentFixture<Comp706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
