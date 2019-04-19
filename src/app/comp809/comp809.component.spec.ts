import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp809Component } from './comp809.component';

describe('Comp809Component', () => {
  let component: Comp809Component;
  let fixture: ComponentFixture<Comp809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
