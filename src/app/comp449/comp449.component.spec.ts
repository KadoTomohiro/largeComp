import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp449Component } from './comp449.component';

describe('Comp449Component', () => {
  let component: Comp449Component;
  let fixture: ComponentFixture<Comp449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
