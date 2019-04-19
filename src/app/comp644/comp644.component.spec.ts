import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp644Component } from './comp644.component';

describe('Comp644Component', () => {
  let component: Comp644Component;
  let fixture: ComponentFixture<Comp644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
