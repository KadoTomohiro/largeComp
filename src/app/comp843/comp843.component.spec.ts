import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp843Component } from './comp843.component';

describe('Comp843Component', () => {
  let component: Comp843Component;
  let fixture: ComponentFixture<Comp843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
