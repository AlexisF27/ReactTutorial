import {  lazy, LazyExoticComponent } from 'react';
import { JSX } from 'react/jsx-runtime';
import { NoLazy } from '../lazyload/pages/NoLazy';
export const LAZY_BASE_PATH = '/lazyload';


type JSXComponent = () => JSX.Element;

interface RouteItem  {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import( /* webpackChunkName: "LazyLayout" */ '../lazyload/layout/LazyLayout'));
const LazyPages1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../lazyload/pages/LazyPages1'));
const LazyPages2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../lazyload/pages/LazyPages2'));
const LazyPages3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../lazyload/pages/LazyPages3'));


export const routes: RouteItem[] = [
{
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'Lazy-Load'
},
{
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'no-lazy'
}
];

export const routesLazyChilds: RouteItem[] = [
    { to: 'lazy1', path: 'lazy1', Component: LazyPages1, name: 'Lazy1' },
    { to: 'lazy2', path: 'lazy2', Component: LazyPages2, name: 'Lazy2' },
    { to: 'lazy3', path: 'lazy3', Component: LazyPages3, name: 'Lazy3' },
];