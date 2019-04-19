import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1000Component } from './comp1000.component';

describe('Comp1000Component', () => {
  let component: Comp1000Component;
  let fixture: ComponentFixture<Comp1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
