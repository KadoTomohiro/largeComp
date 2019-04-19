import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1721Component } from './comp1721.component';

describe('Comp1721Component', () => {
  let component: Comp1721Component;
  let fixture: ComponentFixture<Comp1721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
