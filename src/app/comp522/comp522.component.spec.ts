import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp522Component } from './comp522.component';

describe('Comp522Component', () => {
  let component: Comp522Component;
  let fixture: ComponentFixture<Comp522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
