import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp149Component } from './comp149.component';

describe('Comp149Component', () => {
  let component: Comp149Component;
  let fixture: ComponentFixture<Comp149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
