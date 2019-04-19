import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1080Component } from './comp1080.component';

describe('Comp1080Component', () => {
  let component: Comp1080Component;
  let fixture: ComponentFixture<Comp1080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
