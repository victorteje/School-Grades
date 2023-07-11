import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

//Components
import App from '../src/App.vue'

describe('App component', () => {

    test('should contain a header with title School Grades', () => {

        //given
        const wrapper = mount(App);
        // console.log(wrapper);

        const appHeader = wrapper.find('header');

        //when


        //then
        expect().toBe('School Grades')
    })
})