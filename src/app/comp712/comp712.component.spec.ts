import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp712Component } from './comp712.component';

describe('Comp712Component', () => {
  let component: Comp712Component;
  let fixture: ComponentFixture<Comp712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
