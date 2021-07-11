import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestpageComponent } from './contestpage.component';

describe('ContestpageComponent', () => {
  let component: ContestpageComponent;
  let fixture: ComponentFixture<ContestpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
