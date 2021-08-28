import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllFriendsComponent } from './get-all-friends.component';

describe('GetAllFriendsComponent', () => {
  let component: GetAllFriendsComponent;
  let fixture: ComponentFixture<GetAllFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
