import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

//Components
import App from './../../App.vue'

describe('App component', () => {

    test('should contain a header with title School Grades', () => {

        //given
        const wrapper = mount(App);
        // console.log(wrapper);

        const appHeader = wrapper.find('header');

        //when

        //then
        expect(appHeader.html({ raw: true })).toBe('<header><h1>School Grades</h1></header>')
    })
})