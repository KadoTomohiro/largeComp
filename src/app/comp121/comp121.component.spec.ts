import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp121Component } from './comp121.component';

describe('Comp121Component', () => {
  let component: Comp121Component;
  let fixture: ComponentFixture<Comp121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
