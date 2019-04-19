import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp388Component } from './comp388.component';

describe('Comp388Component', () => {
  let component: Comp388Component;
  let fixture: ComponentFixture<Comp388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
