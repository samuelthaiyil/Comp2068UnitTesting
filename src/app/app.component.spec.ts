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

  // Runs before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;

    appComponent.todoItems = ['Walk dog', 'Study for exams'];
  });

  it('should create app component', () => {
    expect(appComponent).toBeTruthy();
  });

  it('should add todo item', () => {
    // given
    const newItem = 'Watch movie';
    appComponent.todoItem = newItem;

    // when
    appComponent.addTodoItem();

    // then
    expect(appComponent.todoItems).toContain(newItem);
  });

  it('should delete todo item', () => {
    // given
    const itemToDelete = 'Walk dog';

    // when
    appComponent.deleteTodoItem(itemToDelete);

    // then
    expect(appComponent.todoItems).not.toContain(itemToDelete);
  });
});
