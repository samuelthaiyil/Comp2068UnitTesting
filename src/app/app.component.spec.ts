import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;

    appComponent.todoItems = ['Walk the dog', 'Study for exams'];
  });

  it('should create AppComponent', () => {
    expect(appComponent).toBeTruthy();
  });

  it('should add todo item', () => {
    // given 
    appComponent.todoItem = 'Watch a movie';

    //when
    appComponent.addTodoItem();

    //Then
    expect(appComponent.todoItems).toContain('Watch a movie');
  });

  it('should delete todo item', () => {
    //given
    const itemToDelete = 'Walk the dog';

    //when
    appComponent.deleteTodoItem(itemToDelete);

    //Then
    expect(appComponent.todoItems).not.toContain(itemToDelete);
  });

});
