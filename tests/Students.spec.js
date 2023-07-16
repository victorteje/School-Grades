import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

//Components
import Students from '../src/components/Students.vue'

describe('Students component', () => {

    const wrapper = mount(Students);

    test('should contain button with id submit', () => {
        const studentsName = wrapper.find('button');
        expect(studentsName.attributes('id')).toBe('submit');
    })

    test('button emits an event when clicked', () => {    
        wrapper.find('button').trigger('click');      
        expect(wrapper.emitted()).toHaveProperty('sendData');
    })

})