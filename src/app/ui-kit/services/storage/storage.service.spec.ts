import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('Тестирую StorageService', () => {
  let storage: StorageService;
  const testData = {
    name: 'Umaru',
    action: ['eat', 'sleep', 'play']
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });

    storage = TestBed.inject(StorageService);
    storage.setItem('testObj', testData);
    
  });

  it('инициализация сервиса', () => {
    expect(storage).toBeDefined();
  });

  it('задать значение', () => {

    expect(storage.getItem('testObj')).toBeTruthy();
  });

  it('получить значение', () => {
    const obj = storage.getItem('testObj');

    expect(obj.name).toBe('Umaru');
    expect(obj.action.length).toBe(3);
  });

  it('удалить значение', () => {
    storage.removeItem('testObj');

    expect(storage.getItem('testObj')).toBeNull();
  });

  it('получить всё хранилище', () => {
    expect(Object.keys(storage.getStorage()).length).toBeTruthy();
  });
});
