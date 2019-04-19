import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp855Component } from './comp855.component';

describe('Comp855Component', () => {
  let component: Comp855Component;
  let fixture: ComponentFixture<Comp855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
