import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp935Component } from './comp935.component';

describe('Comp935Component', () => {
  let component: Comp935Component;
  let fixture: ComponentFixture<Comp935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
