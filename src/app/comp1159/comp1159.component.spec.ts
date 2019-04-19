import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1159Component } from './comp1159.component';

describe('Comp1159Component', () => {
  let component: Comp1159Component;
  let fixture: ComponentFixture<Comp1159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
