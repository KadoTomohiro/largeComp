import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1073Component } from './comp1073.component';

describe('Comp1073Component', () => {
  let component: Comp1073Component;
  let fixture: ComponentFixture<Comp1073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
