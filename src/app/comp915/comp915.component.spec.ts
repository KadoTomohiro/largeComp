import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp915Component } from './comp915.component';

describe('Comp915Component', () => {
  let component: Comp915Component;
  let fixture: ComponentFixture<Comp915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
