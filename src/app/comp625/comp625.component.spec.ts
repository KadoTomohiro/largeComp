import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp625Component } from './comp625.component';

describe('Comp625Component', () => {
  let component: Comp625Component;
  let fixture: ComponentFixture<Comp625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
