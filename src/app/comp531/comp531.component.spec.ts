import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp531Component } from './comp531.component';

describe('Comp531Component', () => {
  let component: Comp531Component;
  let fixture: ComponentFixture<Comp531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
