import {  lazy, LazyExoticComponent } from 'react';
import { JSX } from 'react/jsx-runtime';


type JSXComponent = () => JSX.Element;

interface Route {
    to: String;
    path: String;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: String;
}

const lazy1 = lazy(() => import( /* webpackChunkName: "LazyPage1" */ '../lazyload/pages/LazyPages1'));
const lazy2 = lazy(() => import( /* webpackChunkName: "LazyPage2" */ '../lazyload/pages/LazyPages2'));
const lazy3 = lazy(() => import( /* webpackChunkName: "LazyPage3" */ '../lazyload/pages/LazyPages3'));


export const routes = [
{
    to: '/lazy1',
    path: 'lazy1',
    Component: lazy1,
    name: 'Lazy-1'
},
{
    to: '/lazy2',
    path: 'lazy2',
    Component: lazy2,
    name: 'Lazy-2'
},
{
    to: '/lazy3',
    path: 'lazy3',
    Component: lazy3,
    name: 'Lazy-3'
}
];