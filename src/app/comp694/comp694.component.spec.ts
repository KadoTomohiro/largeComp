import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp694Component } from './comp694.component';

describe('Comp694Component', () => {
  let component: Comp694Component;
  let fixture: ComponentFixture<Comp694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
