import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

//Components
import App from '../src/App.vue'
import Students from '../src/components/Students.vue'

describe('App component', () => {
    //given
    const wrapper = mount(App);
    // console.log(wrapper);

    test('should contain a header with title School Grades', () => {
        //given
        const appHeader = wrapper.find('header');

        //when

        //then
        expect(appHeader.html({ raw: true })).toBe('<header><h1>School Grades</h1></header>');
    })

    test('a main tag should exist', () => {
        expect(wrapper.find('main').exists()).toBe(true);
    })

    test('child component Students should exist', () => {
        expect(wrapper.findComponent(Students).exists()).toBe(true);
    })

    test('table headers should have class tableHeader', () => {
        const tableHeader1 = wrapper.findAll('th')[0];
        expect(tableHeader1.attributes('class')).toBe('tableHeader');
        const tableHeader2 = wrapper.findAll('th')[1];
        expect(tableHeader2.attributes('class')).toBe('tableHeader');
        // expect(tableHeader.classes()).toContain('tableHeader');
        // expect(tableHeader.classes('tableHeader')).toBe(true);
    })

    // test('should show the name of the student once the button is clicked', () => {
        // wrapper.find('button').trigger('click');
        // const studentsName = wrapper.find('th');
        // expect(studentsName.html).not.toBe("Student");
    // })
})