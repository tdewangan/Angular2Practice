import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaExampleComponent } from './criteria-example.component';

describe('CriteriaExampleComponent', () => {
  let component: CriteriaExampleComponent;
  let fixture: ComponentFixture<CriteriaExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
