import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp916Component } from './comp916.component';

describe('Comp916Component', () => {
  let component: Comp916Component;
  let fixture: ComponentFixture<Comp916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
