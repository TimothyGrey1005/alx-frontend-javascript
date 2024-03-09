/**
 * Represent Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Create a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - course name.
   * @param {Number} length - Course length.
   * @param {String[]} students - Course student.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * course name.
   */
  get name() {
    return this._name;
  }

  /**
   * course name.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * course length.
   */
  get length() {
    return this._length;
  }

  /**
   * court length.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * course student names.
   */
  get students() {
    return this._students;
  }

  /**
   * course student names.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
