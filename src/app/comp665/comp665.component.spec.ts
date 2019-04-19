import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp665Component } from './comp665.component';

describe('Comp665Component', () => {
  let component: Comp665Component;
  let fixture: ComponentFixture<Comp665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
