import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp691Component } from './comp691.component';

describe('Comp691Component', () => {
  let component: Comp691Component;
  let fixture: ComponentFixture<Comp691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
