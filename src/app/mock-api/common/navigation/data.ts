/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { profile } from 'app/mock-api/apps/chat/data';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'navigation',
        title: 'Navigation',
        type : 'group',
        icon : 'heroicons_outline:user-circle',
        children: [
            {
                id: 'navigation.dashboard',
                title: 'Dashboard',
                type: 'basic',
                icon: 'heroicons_outline:cog',
                link: '/dashboard'
            }
        ]
    },
    {
        id   : 'profile',
        title: 'Profile',
        type : 'group',
        icon : 'heroicons_outline:user-circle',
        children: [
            {
                id: 'profile.settings',
                title: 'Profile Settings',
                type: 'basic',
                icon: 'heroicons_outline:cog',
                link: '/pages/settings'
            },
            {
                id: 'profile.signin',
                title: 'Sign In',
                type: 'basic',
                icon: 'heroicons_outline:cog',
                link: 'pages/sign-in'
            }
        ]
    },
    {
        id   : 'storefront',
        title: 'Storefront',
        type : 'group',
        icon : 'heroicons_outline:shopping-bag',
        children: [
            {
                id: 'storefront.products',
                title: 'Store Items',
                type: 'basic',
                icon: 'heroicons_outline:shopping-cart',
                link: '/storefront/products'
            },
            {
                id: 'storefront.invoices',
                title: 'Invoices',
                type: 'basic',
                icon: 'heroicons_outline:document-text',
                link: '/storefront/invoices'
            },
            {
                id: 'storefront.information',
                title: 'Store information',
                type: 'basic',
                icon: 'heroicons_outline:chart-square-bar',
                link: '/storefront/information'
            }
        ]
    },
    {
        id   : 'customers',
        title: 'Customers',
        type : 'group',
        icon : 'heroicons_outline:user-circle',
        children: [
            {
                id: 'customers.allcustomers',
                title: 'All Customers',
                type: 'basic',
                icon: 'heroicons_outline:user-group',
                link: '/customers/allcustomers'
            }
        ]
    }

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'navigation',
        title: 'Quick Navigation',
        type: 'group'
    },
    {
        id: 'profile_management',
        title: 'Profile Management',
        type: 'group'
    },
    {
        id: 'profile',
        title: 'Profile',
        type: 'aside',
        icon: 'heroicons_outline:user-circle',
        children: []
    },
    {
        id: 'store_management',
        title: 'Store Management',
        type: 'group'
    },
    {
        id: 'storefront',
        title: 'Storefront',
        type: 'aside',
        icon: 'heroicons_outline:shopping-bag',
        children: []
    },
    {
        id: 'customer_management',
        title: 'Customer Management',
        type: 'group'
    },
    {
        id: 'customers',
        title: 'Customers',
        type: 'aside',
        icon: 'heroicons_outline:user-group',
        children: []
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    }
];
