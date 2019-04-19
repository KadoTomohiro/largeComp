import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp142Component } from './comp142.component';

describe('Comp142Component', () => {
  let component: Comp142Component;
  let fixture: ComponentFixture<Comp142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
