import { Student } from './student.entity';

describe('StudentEntity', () => {
  it('should be defined', () => {
    expect(new Student()).toBeDefined();
  });
});
