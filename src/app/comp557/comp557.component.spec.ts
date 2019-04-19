import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp557Component } from './comp557.component';

describe('Comp557Component', () => {
  let component: Comp557Component;
  let fixture: ComponentFixture<Comp557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
