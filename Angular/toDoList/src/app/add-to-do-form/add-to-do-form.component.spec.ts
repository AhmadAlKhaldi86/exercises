import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoFormComponent } from './add-to-do-form.component';

describe('AddToDoFormComponent', () => {
  let component: AddToDoFormComponent;
  let fixture: ComponentFixture<AddToDoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToDoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToDoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
