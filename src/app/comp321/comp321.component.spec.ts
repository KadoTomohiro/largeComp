import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp321Component } from './comp321.component';

describe('Comp321Component', () => {
  let component: Comp321Component;
  let fixture: ComponentFixture<Comp321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
