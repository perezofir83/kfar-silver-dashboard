import type { Lead } from '../types';

export const MOCK_LEADS: Lead[] = [
    {
        id: '1',
        rowNumber: 2,
        name: 'דני דנינו',
        phone: '050-1234567',
        city: 'אשקלון',
        grade: 'ז',
        contactDate: '01/01/2026',
        source: 'פייסבוק',
        leadType: 'External',
        notes: 'מעוניין באקסטרני',
        status: 'חדש'
    },
    {
        id: '2',
        rowNumber: 3,
        name: 'שרה שרה',
        phone: '052-1234567',
        city: 'מרכז',
        grade: 'ז',
        contactDate: '01/01/2026',
        source: 'פייסבוק',
        leadType: 'Boarding',
        notes: 'מעוניינת בפנימייה',
        status: 'בטיפול'
    },
    {
        id: '3',
        rowNumber: 4,
        name: 'יוסי יוסף',
        phone: '054-1234567',
        city: 'דרום',
        grade: 'ח',
        contactDate: '02/01/2026',
        source: 'חבר מביא חבר',
        leadType: 'Boarding',
        notes: '',
        status: 'התקבל'
    },
    {
        id: '4',
        rowNumber: 5,
        name: 'מיכל מיכאלי',
        phone: '055-1234567',
        city: 'חו"ל',
        grade: 'ט',
        contactDate: '03/01/2026',
        source: 'סוכנות',
        leadType: 'Naale',
        notes: 'נע"לה',
        status: 'התקבל'
    },
    {
        id: '5',
        rowNumber: 6,
        name: 'רוני רון',
        phone: '053-1112223',
        city: 'תל אביב',
        grade: 'ז',
        contactDate: '04/01/2026',
        source: 'אתר',
        leadType: 'Boarding',
        notes: 'פנימייה',
        status: 'התקבל'
    }
];
