import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

//Components
import Students from '../src/components/Students.vue'

describe('Students component', () => {

    const wrapper = mount(Students);

    test('should contain subtitle with id studentsName', () => {
        const studentsName = wrapper.find('h2');
        expect(studentsName.attributes('id')).toBe('studentsName');
    })

})