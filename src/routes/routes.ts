import { Component } from 'react';
import { LazyPages1, LazyPages2, LazyPages3 } from '../lazyload/pages/index'
import lazyPages2 from '../lazyload/pages/LazyPages2';


interface Route {
    to: String;
    path: String;
    Component: () => Element;
    name: String;
}


export const routes = [
{
    to: '/lazy1',
    path: 'lazy1',
    Component: LazyPages1,
    name: 'Lazy-1'
},
{
    to: '/lazy2',
    path: 'lazy2',
    Component: lazyPages2,
    name: 'Lazy-2'
},
{
    to: '/lazy3',
    path: 'lazy3',
    Component: LazyPages3,
    name: 'Lazy-3'
}
];