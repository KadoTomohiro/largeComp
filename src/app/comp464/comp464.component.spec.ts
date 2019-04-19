import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp464Component } from './comp464.component';

describe('Comp464Component', () => {
  let component: Comp464Component;
  let fixture: ComponentFixture<Comp464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
