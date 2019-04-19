import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp631Component } from './comp631.component';

describe('Comp631Component', () => {
  let component: Comp631Component;
  let fixture: ComponentFixture<Comp631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
