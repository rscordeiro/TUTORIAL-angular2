import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTaskCountComponent } from './third-task-count.component';

describe('ThirdTaskCountComponent', () => {
  let component: ThirdTaskCountComponent;
  let fixture: ComponentFixture<ThirdTaskCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdTaskCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTaskCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
