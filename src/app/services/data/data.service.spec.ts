import { TestBed } from "@angular/core/testing";
import { StorageService } from "src/app/ui-kit/services/storage/storage.service";
import { DataService } from "./data.service";

xdescribe('Тестирую DataService', () => {
  let data: DataService;
  let storage: StorageService;

  const fakeStorage = jasmine.createSpyObj(['getItem']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
        {
          provide: StorageService,
          useValue: fakeStorage
        }
      ]
    });

    data = TestBed.inject(DataService);
    storage = TestBed.inject(StorageService);
    fakeStorage.getItem.and.returnValue('Umaru');
    fakeStorage.getItem.calls.reset();
  });

  it('инициализация сервиса', () => {
    expect(data).toBeDefined();
  });

  it('получить имя из data через storage', () => {
    const name = data.getName();

    expect(name).toBe('Umaru');
  });

  it('получить другое имя', () => {
    fakeStorage.getItem.and.returnValue('Alisa');
    const name = data.getName();

    expect(name).toBe('Alisa');
  });

  it('вызывался ли метод getItem сервиса storage', () => {
    data.getName();
    expect(fakeStorage.getItem).toHaveBeenCalled();
    expect(fakeStorage.getItem).toHaveBeenCalledTimes(1);
  });
});